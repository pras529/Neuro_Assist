import psycopg2
from psycopg2.extras import RealDictCursor
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Database connection settings
DB_NAME = os.getenv("POSTGRES_DB", "neuro_assist")
DB_USER = os.getenv("POSTGRES_USER", "postgres")
DB_PASSWORD = os.getenv("POSTGRES_PASSWORD", "password")
DB_HOST = os.getenv("POSTGRES_HOST", "localhost")
DB_PORT = os.getenv("POSTGRES_PORT", "5432")


# Function to establish a connection
def get_db_connection():
    try:
        conn = psycopg2.connect(
            dbname=DB_NAME,
            user=DB_USER,
            password=DB_PASSWORD,
            host=DB_HOST,
            port=DB_PORT
        )
        return conn
    except Exception as e:
        print(f"Error connecting to database: {e}")
        return None


# Example test connection
if __name__ == "__main__":
    conn = get_db_connection()
    if conn:
        cursor = conn.cursor(cursor_factory=RealDictCursor)
        cursor.execute("SELECT NOW();")
        print("Database connected:", cursor.fetchone())
        cursor.close()
        conn.close()
