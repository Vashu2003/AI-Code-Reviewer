#!/bin/bash
set -o errexit
pip install -r requirements.txt
python -m uvicorn app.main:app --host 0.0.0.0 --port ${PORT:-10000}
