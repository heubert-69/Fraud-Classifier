"""Backend Import"""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import joblib
import pandas as pd

# Load model
model = joblib.load("fraud_detection_model.pkl")

# Initialize FastAPI app
app = FastAPI()

# Allow React (Vite) frontend to communicate with FastAPI
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # or ["http://localhost:5173"] for Vite dev server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Prediction endpoint
@app.post("/predict")
async def predict(data: dict):
    # Convert incoming JSON to DataFrame
    df = pd.DataFrame([data])
    prediction = model.predict(df)[0]
    probability = model.predict_proba(df)[0][1]
    return {
        "is_fraud": int(prediction),
        "fraud_probability": float(probability)
    }
