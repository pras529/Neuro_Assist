import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()


class Config:
    SECRET_KEY = os.getenv("SECRET_KEY", "your_default_secret_key")
    DATABASE_URL = os.getenv("DATABASE_URL", "postgresql://user:password@localhost/dbname")
    ACCESS_TOKEN_EXPIRE_MINUTES = int(os.getenv("ACCESS_TOKEN_EXPIRE_MINUTES", 30))
    CLOUD_STORAGE_BUCKET = os.getenv("CLOUD_STORAGE_BUCKET", "your-bucket-name")
    AI_MODEL = os.getenv("AI_MODEL", "GoogleGemini")
