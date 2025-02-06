from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from database.db import get_db
from backend.app.models import MentalHealthEntry

# Mental Health Monitoring Routes
health_router = APIRouter()


@health_router.post("/entries", response_model=MentalHealthEntry)
def add_health_entry(entry: MentalHealthEntry, db: Session = Depends(get_db)):
    db_entry = MentalHealthEntry(**entry.dict())
    db.add(db_entry)
    db.commit()
    db.refresh(db_entry)
    return db_entry
