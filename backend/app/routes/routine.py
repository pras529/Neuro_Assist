from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from database.db import get_db
from backend.app.models import RoutineTask

# Routine Management Routes
routine_router = APIRouter()


@routine_router.post("/tasks", response_model=RoutineTask)
def add_task(task: RoutineTask, db: Session = Depends(get_db)):
    db_task = RoutineTask(**task.dict())
    db.add(db_task)
    db.commit()
    db.refresh(db_task)
    return db_task
