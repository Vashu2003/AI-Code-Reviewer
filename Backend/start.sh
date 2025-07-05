#!/bin/bash
set -o errexit

# Show Python version for debugging
echo "Using Python version:"
python --version

pip install -r requirements.txt
python -m uvicorn app.main:app --host 0.0.0.0 --port ${PORT:-10000}
