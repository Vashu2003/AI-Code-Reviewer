# Use a stable Python image
FROM python:3.11-slim

# Set working directory
WORKDIR /app

# Copy only backend files
COPY . .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Expose for Uvicorn
EXPOSE 10000

# Start FastAPI
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "10000"]
