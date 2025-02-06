from datetime import datetime, timezone
import logging


# Helper Functions
def format_response(success: bool, message: str, data: dict = None):
    return {"success": success, "message": message, "data": data}


def log_event(event: str):
    logging.basicConfig(filename="app.log", level=logging.INFO)
    logging.info(f"{datetime.now(timezone.utc)} - {event}")
