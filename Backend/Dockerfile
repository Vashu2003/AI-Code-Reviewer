# Use official Python image
FROM python:3.11-slim

# Set working directory
WORKDIR /app

# Install required system packages (optional, can add git, build-essential if needed)
RUN apt-get update && apt-get install -y \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

# Copy project files
COPY . /app/

# Install Python dependencies
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# Expose port (make sure it matches your server)
EXPOSE 10000

# Start the app using uvicorn
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "10000"]
