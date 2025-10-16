FROM python:3.13

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set working directory
WORKDIR /ML_utils

# Copy requirements file
COPY requirements.txt .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy application code
COPY . .

# Expose the port
EXPOSE 8501

# Run the application
CMD ["uvicorn",  "main:ml_backend.py", "--server.port=8501", "--server.enableCORS=false"]
