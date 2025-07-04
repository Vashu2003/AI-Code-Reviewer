#!/bin/bash
python --version  # 👈 add this to debug
uvicorn app.main:app --host 0.0.0.0 --port 10000
