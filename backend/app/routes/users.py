from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from backend.app.db import get_db_connection
from backend.app.models import User, UserProfile

# Users Routes
users_router = APIRouter()


@users_router.get("/profile/{user_id}", response_model=UserProfile)
def get_user_profile(user_id: int, db: Session = Depends(get_db_connection)):
    user = db.query(User).filter(User.id == user_id).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user
