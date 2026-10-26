# ☁️ AWS Compute Optimizer FinOps Studio

> **AWS 6대 리소스 머신러닝 라이트사이징 & 심층 FinOps 감사(Extended Support · 네트워크 · 스토리지) 통합 분석 스튜디오**  
> 100% Read-Only(`get-*`, `describe-*`) 기반으로 안전하게 진단하며, CloudShell 원클릭 스크립트와 Excel / Word / HTML 보고서 발행을 지원합니다.

---

## 🌟 주요 핵심 기능

### 1. AWS Compute Optimizer 6대 핵심 리소스 라이트사이징
- **Amazon EC2**: CPU/메모리/네트워크 피크 메트릭 기반 다운사이징, 업사이징, Graviton(ARM64) 추천 및 아키텍처 호환성 검증 경고
- **Amazon EBS**: `gp2` → `gp3` 온라인 무중단 볼륨 마이그레이션 및 IOPS/처리량 최적화
- **Amazon RDS / Aurora**: 인스턴스 클래스(`db.r7g` → `db.r8g` 등 최신 세대), 스토리지 옵션 및 신규 엔진 버전(`NewEngineVersionAvailable`) 안내
- **Amazon ECS (Fargate)**: Task Definition vCPU/Memory 적정 사이징
- **AWS Lambda**: 실제 메모리 사용률 기반 최적 메모리 MB 권고
- **Idle (유휴 리소스)**: 14일간 활성 트래픽이 없는 유휴 인스턴스, 미연결 EBS 볼륨 식별

### 2. 심층 FinOps 아키텍처 감사 (Extended FinOps)
- **⏳ EKS & RDS Extended Support 실시간 동기화**:
  - `eks:DescribeClusterVersions` 및 `rds:DescribeDBEngineVersions` API를 통해 현재 리전의 공식 표준 지원 버전과 Extended Support 상태를 실시간 감지
  - EKS 구버전(1.31 등) 클러스터의 시간당 `$0.50` (월 `$365`) 추가 과금 제거 및 최신 표준 버전 인플레이스 업데이트 권고
- **🌐 네트워크 고정비 & 아키텍처 점검**:
  - **미사용 Public IPv4 (EIP)**: 연결되지 않은 EIP 감지 (개당 월 `$3.65` 유휴 과금)
  - **유휴 ALB**: 활성 타겟(Healthy Target)이 0개인 미사용 로드밸런서 감지
  - **NAT Gateway & S3 Endpoint**: VPC 내 무료 S3/DynamoDB Gateway Endpoint 미설치로 인한 유료 NAT 데이터 처리 요금(`$0.059/GB`) 과금 위험 감지 및 CloudWatch 14일 트래픽 0 Byte 유휴 NAT GW 식별
- **🗄️ 스토리지 & 로그 수명주기 감사**:
  - **노후 스냅샷**: 90일 이상 경과된 장기 방치 EBS/RDS 스냅샷 정리 권고
  - **CloudWatch Logs**: 보존 기간(Retention) 미설정으로 영구 누적 과금 중인 로그 그룹 감지
  - **S3 수명주기**: 수명주기(Lifecycle) 규칙이 없는 버킷 식별

### 3. 글로벌 리전별 단가 동적 산출 엔진
- 미국 버지니아(`us-east-1`) 단가로 고정되지 않고, **서울(`ap-northeast-2`), 뭄바이(`ap-south-1`), 도쿄(`ap-northeast-1`), 오레곤(`us-west-2`) 등 대상 리전의 AWS 공식 단가 및 AWS Price List API(`pricing:GetProducts`)**를 동적으로 반영하여 정확한 절감 산식을 도출합니다.

### 4. 보고서 원클릭 생성 & 경영진 보고
- **📊 Excel (.xlsx)**: 임원 요약 + 전체 리소스 상세 + 서비스별 피벗이 포함된 서식 완성형 스프레드시트
- **📝 Word (.docx)**: Well-Architected 3단계 실행 로드맵(Quick Wins → 현대화 → 안정화)이 포함된 공식 기술 보고서
- **🖨️ 경영진 요약 (HTML/PDF)**: 브라우저에서 인쇄(Ctrl+P) 즉시 PDF로 저장 가능한 반응형 보고서

---

## 🔒 보안 및 안전 원칙

- **100% Read-Only**: 리소스 수정, 삭제, 중지(`terminate`, `delete`, `stop` 등) 명령을 절대 실행하지 않으며 오직 조회(`get-*`, `describe-*`, `list-*`)만 수행합니다.
- **자격 증명 미저장**:
  - **방식 A (권장)**: AWS CloudShell에서 스크립트를 실행해 생성된 읽기 전용 JSON 파일만 로컬 대시보드에 업로드
  - **방식 B**: 임시 세션 토큰(STS) 또는 로컬 SSO 프로파일 연동 시 메모리에서 1회성으로만 호출되며 디스크나 외부로 유출되지 않음

---

## 🚀 빠른 시작 가이드 (Quick Start)

### 요구사항
- Python 3.10+
- 최신 웹 브라우저 (Chrome, Edge 등)

### 설치 및 실행

```bash
# 1. 저장소 클론
git clone https://github.com/unihit/aws-compute-optimizer-studio.git
cd aws-compute-optimizer-studio

# 2. 가상환경 생성 및 패키지 설치
python -m venv .venv
source .venv/bin/activate  # Windows: .\.venv\Scripts\activate
pip install -r requirements.txt

# 3. 스튜디오 서버 실행
python -m uvicorn backend.main:app --host 127.0.0.1 --port 8090
```

> **Windows 원클릭 실행**: 폴더 내 `run_studio.bat` 파일을 더블 클릭하면 자동으로 브라우저가 열리며 실행됩니다.

---

## 📁 프로젝트 구조

```
aws-compute-optimizer-studio/
├── backend/
│   ├── main.py               # FastAPI 라우터 및 API 엔드포인트
│   ├── collector.py          # AWS 데이터 정규화, 리전별 단가 계산, CloudShell 스크립트 생성기
│   ├── report_generator.py   # Excel (.xlsx), Word (.docx), HTML 보고서 생성 엔진
│   └── mock_data.py          # 오프라인 데모 및 테스트용 샘플 데이터셋
├── frontend/
│   └── index.html            # Tailwind CSS + Chart.js 반응형 단일 페이지 대시보드
├── requirements.txt          # 파이썬 의존성 목록
├── run_studio.bat            # Windows 간편 실행 배치 스크립트
└── README.md
```

---

## 📄 라이선스
MIT License
