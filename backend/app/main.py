from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware
from routes import auth, users, learning, jobs, routine, health
import uvicorn

# Initialize FastAPI app
app = FastAPI(title="Neuro-Assist API", version="1.0")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routes
app.include_router(auth.auth_router, prefix="/auth", tags=["Authentication"])
app.include_router(users.users_router, prefix="/users", tags=["Users"])
app.include_router(learning.learning_router, prefix="/learning", tags=["Learning Assistance"])
app.include_router(jobs.jobs_router, prefix="/jobs", tags=["Employment Support"])
app.include_router(routine.routine_router, prefix="/routine", tags=["Routine Management"])
app.include_router(health.health_router, prefix="/health", tags=["Mental Health Monitoring"])


# Root endpoint
@app.get("/")
def root():
    return {"message": "Welcome to Neuro-Assist API"}


# Run the application
if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
