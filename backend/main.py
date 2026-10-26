"""
FastAPI Backend for AWS Compute Optimizer Studio.
Serves the browser dashboard UI, CloudShell script generator, STS/Profile live collection,
JSON snapshot import, EC2 Graviton preference toggle, and Excel (.xlsx) / Word (.docx) / HTML-PDF report exports.
"""

import json
from pathlib import Path
from typing import Optional, Dict, Any
from fastapi import FastAPI, UploadFile, File, HTTPException, Query
from fastapi.responses import HTMLResponse, Response
from pydantic import BaseModel

from backend.mock_data import get_sample_dataset
from backend.collector import (
    normalize_dataset,
    collect_from_aws_live,
    generate_cloudshell_script,
)
from backend.report_generator import (
    generate_excel_report,
    generate_word_report,
    generate_executive_html_report,
)

app = FastAPI(
    title="AWS Compute Optimizer FinOps Studio",
    description="Browser-based AWS Resource Cost Optimization & Multi-Format Report Engine",
    version="1.1.0",
)

FRONTEND_DIR = Path(__file__).resolve().parent.parent / "frontend"
SNAPSHOT_CACHE_FILE = Path(__file__).resolve().parent / ".last_snapshot.json"


def _load_initial_payload() -> Dict[str, Any]:
    if SNAPSHOT_CACHE_FILE.exists():
        try:
            return json.loads(SNAPSHOT_CACHE_FILE.read_text(encoding="utf-8"))
        except Exception:
            pass
    return get_sample_dataset()


def _save_payload_cache(payload: Dict[str, Any]) -> None:
    try:
        SNAPSHOT_CACHE_FILE.write_text(json.dumps(payload, ensure_ascii=False, default=str), encoding="utf-8")
    except Exception:
        pass


# In-memory raw payload & preferences so toggling EC2 Graviton or Exclude Optimized dynamically re-evaluates
CURRENT_RAW_PAYLOAD: Dict[str, Any] = _load_initial_payload()
ALLOW_EC2_GRAVITON: bool = True
EXCLUDE_OPTIMIZED: bool = False
CURRENT_STATE: Dict[str, Any] = normalize_dataset(
    CURRENT_RAW_PAYLOAD,
    allow_ec2_graviton=ALLOW_EC2_GRAVITON,
    exclude_optimized=EXCLUDE_OPTIMIZED,
)


class LiveScanRequest(BaseModel):
    region: str = "ap-northeast-2"
    mode: str = "sts"  # "sts" or "profile"
    aws_access_key_id: Optional[str] = None
    aws_secret_access_key: Optional[str] = None
    aws_session_token: Optional[str] = None
    profile_name: Optional[str] = None


class PreferencesRequest(BaseModel):
    allow_ec2_graviton: Optional[bool] = None
    exclude_optimized: Optional[bool] = None


@app.get("/api/dashboard")
def get_dashboard_data():
    """Returns the currently loaded normalized dataset and KPIs."""
    return CURRENT_STATE


@app.post("/api/preferences")
def update_preferences(req: PreferencesRequest):
    """Toggles whether EC2 recommendations include Graviton (ARM64) or whether Optimized items are excluded."""
    global ALLOW_EC2_GRAVITON, EXCLUDE_OPTIMIZED, CURRENT_STATE
    if req.allow_ec2_graviton is not None:
        ALLOW_EC2_GRAVITON = req.allow_ec2_graviton
    if req.exclude_optimized is not None:
        EXCLUDE_OPTIMIZED = req.exclude_optimized
    CURRENT_STATE = normalize_dataset(
        CURRENT_RAW_PAYLOAD,
        allow_ec2_graviton=ALLOW_EC2_GRAVITON,
        exclude_optimized=EXCLUDE_OPTIMIZED,
    )
    return CURRENT_STATE


@app.post("/api/reset-demo")
def reset_to_demo(region: str = "ap-northeast-2"):
    """Resets workspace back to the rich sample dataset."""
    global CURRENT_RAW_PAYLOAD, CURRENT_STATE
    if SNAPSHOT_CACHE_FILE.exists():
        try:
            SNAPSHOT_CACHE_FILE.unlink()
        except Exception:
            pass
    CURRENT_RAW_PAYLOAD = get_sample_dataset(region=region)
    CURRENT_STATE = normalize_dataset(
        CURRENT_RAW_PAYLOAD,
        allow_ec2_graviton=ALLOW_EC2_GRAVITON,
        exclude_optimized=EXCLUDE_OPTIMIZED,
    )
    return CURRENT_STATE


@app.get("/api/cloudshell-script")
def get_cloudshell_command(region: str = Query("auto")):
    """Returns a 100% read-only CloudShell script to export Compute Optimizer JSON (auto-detects region by default)."""
    return {
        "region": region,
        "script": generate_cloudshell_script(region=region),
    }


@app.post("/api/upload-snapshot")
async def upload_cloudshell_snapshot(file: UploadFile = File(...)):
    """Imports a JSON snapshot exported from AWS CloudShell or AWS CLI."""
    global CURRENT_RAW_PAYLOAD, CURRENT_STATE
    try:
        raw_bytes = await file.read()
        payload = json.loads(raw_bytes.decode("utf-8"))
        CURRENT_RAW_PAYLOAD = payload
        _save_payload_cache(CURRENT_RAW_PAYLOAD)
        CURRENT_STATE = normalize_dataset(
            CURRENT_RAW_PAYLOAD,
            allow_ec2_graviton=ALLOW_EC2_GRAVITON,
            exclude_optimized=EXCLUDE_OPTIMIZED,
        )
        return CURRENT_STATE
    except Exception as exc:
        raise HTTPException(status_code=400, detail=f"JSON 스냅샷 파싱 실패: {str(exc)}")


@app.post("/api/scan-live")
def scan_live_aws(req: LiveScanRequest):
    """
    Runs read-only get-* Compute Optimizer API calls using ephemeral STS credentials or local profile.
    Credentials are never persisted or logged.
    """
    global CURRENT_RAW_PAYLOAD, CURRENT_STATE
    try:
        CURRENT_RAW_PAYLOAD = collect_from_aws_live(
            region=req.region,
            aws_access_key_id=req.aws_access_key_id if req.mode == "sts" else None,
            aws_secret_access_key=req.aws_secret_access_key if req.mode == "sts" else None,
            aws_session_token=req.aws_session_token if req.mode == "sts" else None,
            profile_name=req.profile_name if req.mode == "profile" else None,
        )
        _save_payload_cache(CURRENT_RAW_PAYLOAD)
        CURRENT_STATE = normalize_dataset(
            CURRENT_RAW_PAYLOAD,
            allow_ec2_graviton=ALLOW_EC2_GRAVITON,
            exclude_optimized=EXCLUDE_OPTIMIZED,
        )
        return CURRENT_STATE
    except Exception as exc:
        raise HTTPException(
            status_code=400,
            detail=f"AWS Compute Optimizer 조회 실패 (권한 또는 자격 증명을 확인하세요): {str(exc)}",
        )


@app.get("/api/reports/excel")
def download_excel_report(
    krw_rate: float = Query(1384.5),
    allow_ec2_graviton: Optional[bool] = Query(None),
    exclude_optimized: Optional[bool] = Query(None),
    krw_rate_source: Optional[str] = Query(None),
):
    """Downloads multi-sheet Excel (.xlsx) report."""
    grav = ALLOW_EC2_GRAVITON if allow_ec2_graviton is None else allow_ec2_graviton
    excl = EXCLUDE_OPTIMIZED if exclude_optimized is None else exclude_optimized
    state = normalize_dataset(CURRENT_RAW_PAYLOAD, allow_ec2_graviton=grav, exclude_optimized=excl)
    if krw_rate_source:
        state = dict(state)
        state["exchangeRateInfo"] = dict(state.get("exchangeRateInfo", {}), rate=krw_rate, source=krw_rate_source)
    xlsx_bytes = generate_excel_report(state, krw_rate=krw_rate)
    acct = state.get("metadata", {}).get("accountId", "aws")
    filename = f"AWS_Compute_Optimizer_Report_{acct}.xlsx"
    return Response(
        content=xlsx_bytes,
        media_type="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        headers={"Content-Disposition": f'attachment; filename="{filename}"'},
    )


@app.get("/api/reports/word")
def download_word_report(
    krw_rate: float = Query(1384.5),
    allow_ec2_graviton: Optional[bool] = Query(None),
    exclude_optimized: Optional[bool] = Query(None),
    krw_rate_source: Optional[str] = Query(None),
):
    """Downloads formal Word (.docx) report."""
    grav = ALLOW_EC2_GRAVITON if allow_ec2_graviton is None else allow_ec2_graviton
    excl = EXCLUDE_OPTIMIZED if exclude_optimized is None else exclude_optimized
    state = normalize_dataset(CURRENT_RAW_PAYLOAD, allow_ec2_graviton=grav, exclude_optimized=excl)
    if krw_rate_source:
        state = dict(state)
        state["exchangeRateInfo"] = dict(state.get("exchangeRateInfo", {}), rate=krw_rate, source=krw_rate_source)
    docx_bytes = generate_word_report(state, krw_rate=krw_rate)
    acct = state.get("metadata", {}).get("accountId", "aws")
    filename = f"AWS_Compute_Optimizer_Executive_Report_{acct}.docx"
    return Response(
        content=docx_bytes,
        media_type="application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        headers={"Content-Disposition": f'attachment; filename="{filename}"'},
    )


@app.get("/api/reports/html", response_class=HTMLResponse)
def view_html_report(
    krw_rate: float = Query(1384.5),
    allow_ec2_graviton: Optional[bool] = Query(None),
    exclude_optimized: Optional[bool] = Query(None),
    krw_rate_source: Optional[str] = Query(None),
):
    """Opens printable Executive HTML/PDF summary report."""
    grav = ALLOW_EC2_GRAVITON if allow_ec2_graviton is None else allow_ec2_graviton
    excl = EXCLUDE_OPTIMIZED if exclude_optimized is None else exclude_optimized
    state = normalize_dataset(CURRENT_RAW_PAYLOAD, allow_ec2_graviton=grav, exclude_optimized=excl)
    if krw_rate_source:
        state = dict(state)
        state["exchangeRateInfo"] = dict(state.get("exchangeRateInfo", {}), rate=krw_rate, source=krw_rate_source)
    html_str = generate_executive_html_report(state, krw_rate=krw_rate)
    return HTMLResponse(content=html_str)


@app.get("/", response_class=HTMLResponse)
def serve_index():
    index_file = FRONTEND_DIR / "index.html"
    return HTMLResponse(content=index_file.read_text(encoding="utf-8"))
