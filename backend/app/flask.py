from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager, jwt_required, get_jwt_identity
import secrets

app = Flask(__name__)

secret_key = secrets.token_hex(32)

app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql://postgres:pras529@localhost:5432/postgres"
app.config["JWT_SECRET_KEY"] = secret_key  # Change this to a secure key
db = SQLAlchemy(app)
jwt = JWTManager(app)


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    progress = db.Column(db.Float, default=0.0)
    last_activity = db.Column(db.String(255), nullable=True)
    schedule = db.Column(db.JSON, nullable=True)


@app.route("/user-dashboard", methods=["GET"])
@jwt_required()
def get_dashboard():
    user_id = get_jwt_identity()
    user = User.query.filter_by(id=user_id).first()

    if not user:
        return jsonify({"error": "User not found"}), 404

    return jsonify({
        "username": user.username,
        "progress": user.progress,
        "last_activity": user.last_activity,
        "schedule": user.schedule
    })


if __name__ == "__main__":
    app.run(debug=True)
