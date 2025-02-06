from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from database.db import get_db
from backend.app.models import JobListing

# Job Listings Routes
jobs_router = APIRouter()


@jobs_router.post("/jobs", response_model=JobListing)
def add_job(job: JobListing, db: Session = Depends(get_db)):
    db_job = JobListing(**job.dict())
    db.add(db_job)
    db.commit()
    db.refresh(db_job)
    return db_job
