from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from database.db import get_db
from backend.app.models import LearningMaterial

# Learning Assistance Routes
learning_router = APIRouter()


@learning_router.post("/materials", response_model=LearningMaterial)
def add_learning_material(material: LearningMaterial, db: Session = Depends(get_db)):
    db_material = LearningMaterial(**material.dict())
    db.add(db_material)
    db.commit()
    db.refresh(db_material)
    return db_material
