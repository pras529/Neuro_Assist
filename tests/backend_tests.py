import unittest
import requests

BASE_URL = "http://localhost:5000/api"


class BackendTests(unittest.TestCase):
    def test_login(self):
        response = requests.post(f"{BASE_URL}/auth/login", json={
            "email": "test@example.com",
            "password": "password123"
        })
        self.assertEqual(response.status_code, 200)
        self.assertIn("token", response.json())

    def test_register(self):
        response = requests.post(f"{BASE_URL}/auth/register", json={
            "name": "Test User",
            "email": "testuser@example.com",
            "password": "password123"
        })
        self.assertEqual(response.status_code, 201)
        self.assertIn("message", response.json())

    def test_fetch_user_profile(self):
        login_response = requests.post(f"{BASE_URL}/auth/login", json={
            "email": "test@example.com",
            "password": "password123"
        })
        token = login_response.json().get("token")

        response = requests.get(f"{BASE_URL}/user/profile", headers={
            "Authorization": f"Bearer {token}"
        })
        self.assertEqual(response.status_code, 200)
        self.assertIn("email", response.json())


if __name__ == "__main__":
    unittest.main()
