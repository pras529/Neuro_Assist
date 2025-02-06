from sqlalchemy import Column, Integer, String, Boolean, ForeignKey, DateTime, Text
from sqlalchemy.orm import declarative_base, relationship
from datetime import datetime, timezone

Base = declarative_base()


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, nullable=False)
    email = Column(String, unique=True, nullable=False, index=True)
    hashed_password = Column(String, nullable=False)
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime, default=lambda: datetime.now(timezone.utc))
    password = Column(String, nullable=False)

    profiles = relationship("UserProfile", back_populates="user")


class UserProfile(Base):
    __tablename__ = "user_profiles"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    full_name = Column(String, nullable=True)
    bio = Column(String, nullable=True)
    interests = Column(String, nullable=True)

    user = relationship("User", back_populates="profiles")


class LearningMaterial(Base):
    __tablename__ = "learning_materials"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    title = Column(String, nullable=False)
    description = Column(String, nullable=False)
    content_url = Column(String, nullable=False)
    created_at = Column(DateTime, default=lambda: datetime.now(timezone.utc))
    entry_text = Column(Text, nullable=False)

    user = relationship("User", back_populates="learning_materials")

    def dict(self):  # Custom method to return a dictionary representation
        return {
            "id": self.id,
            "user_id": self.user_id,
            "entry_text": self.entry_text
        }

class JobListing(Base):
    __tablename__ = "job_listings"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    title = Column(String, nullable=False)
    company = Column(String, nullable=False)
    location = Column(String, nullable=False)
    description = Column(String, nullable=False)
    created_at = Column(DateTime, default=lambda: datetime.now(timezone.utc))
    entry_text = Column(Text, nullable=False)

    user = relationship("User", back_populates="Job_listings")

    def dict(self):  # Custom method to return a dictionary representation
        return {
            "id": self.id,
            "user_id": self.user_id,
            "entry_text": self.entry_text
        }


class RoutineTask(Base):
    __tablename__ = "routine_tasks"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    task_name = Column(String, nullable=False)
    schedule_time = Column(DateTime, nullable=False)
    entry_text = Column(Text, nullable=False)

    user = relationship("User", back_populates="Routine_tasks")

    def dict(self):  # Custom method to return a dictionary representation
        return {
            "id": self.id,
            "user_id": self.user_id,
            "entry_text": self.entry_text
        }


class MentalHealthEntry(Base):
    __tablename__ = "mental_health_entries"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    mood = Column(String, nullable=False)
    notes = Column(String, nullable=True)
    created_at = Column(DateTime, default=lambda: datetime.now(timezone.utc))
    entry_text = Column(Text, nullable=False)

    user = relationship("User", back_populates="mental_health_entries")

    def dict(self):  # Custom method to return a dictionary representation
        return {
            "id": self.id,
            "user_id": self.user_id,
            "entry_text": self.entry_text
        }
