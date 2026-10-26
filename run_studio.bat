@echo off
cd /d "%~dp0"
echo Starting AWS Compute Optimizer FinOps Studio on http://localhost:8090 ...
start "" http://localhost:8090
.\.venv\Scripts\python.exe -m uvicorn backend.main:app --host 127.0.0.1 --port 8090

