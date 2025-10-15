"""Data Engineering Script"""

import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
import skimpy as sk
import imblearn
import plotly.express as pl
from scipy import stats
from datetime import datetime

#Models to use
from sklearn.linear_model import LogisticRegression
from sklearn.ensemble import RandomForestClassifier
from sklearn.tree import DecisionTreeClassifier
from catboost import CatBoostClassifier
from xgboost import XGBClassifier
from sklearn.ensemble import AdaBoostClassifier
from sklearn.ensemble import BaggingClassifier

#Utils
from sklearn.model_selection import train_test_split
from sklearn.model_selection import RandomizedSearchCV
from sklearn.preprocessing import StandardScaler
from sklearn.preprocessing import RobustScaler
from sklearn.pipeline import Pipeline
from sklearn.impute import SimpleImputer
from sklearn.preprocessing import LabelEncoder


#Model Export
import joblib

df = pd.read_csv("financial_fraud_detection_dataset.csv")


#Dropping Unnecessary Rows
df = df.drop(columns=["geo_anomaly_score", "velocity_score", "spending_deviation_score", "device_used", "sender_account", "receiver_account", "transaction_type", "time_since_last_transaction", "ip_address", "device_hash", "payment_channel"], axis=1)
# Convert the entire timestamp column to datetime
df["date"] = pd.to_datetime(df["timestamp"], format='ISO8601')

# If you only want the date part (without time)
df["date"] = pd.to_datetime(df["timestamp"], format='ISO8601').dt.date
# OR
df["date"] = pd.to_datetime(df["timestamp"], format='ISO8601').dt.strftime("%Y-%m-%d")
encoder = LabelEncoder()
df["category"] = encoder.fit_transform(df["merchant_category"])
df["location"] = encoder.fit_transform(df["location"])
df.drop(columns=["merchant_category", "timestamp"], axis=1)