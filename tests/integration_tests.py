import unittest
import requests

BASE_URL = "http://localhost:5000"


class IntegrationTests(unittest.TestCase):

    def test_homepage(self):
        response = requests.get(f"{BASE_URL}/")
        self.assertEqual(response.status_code, 200)

    def test_user_registration(self):
        payload = {
            "username": "tester",
            "email": "testuser@example.com",
            "password": "Test@1234"
        }
        response = requests.post(f"{BASE_URL}/auth/register", json=payload)
        self.assertEqual(response.status_code, 201)

    def test_user_login(self):
        payload = {
            "email": "testuser@example.com",
            "password": "Test@1234"
        }
        response = requests.post(f"{BASE_URL}/auth/login", json=payload)
        self.assertEqual(response.status_code, 200)
        self.assertIn("access_token", response.json())

    def test_get_learning_resources(self):
        response = requests.get(f"{BASE_URL}/learning/resources")
        self.assertEqual(response.status_code, 200)

    def test_get_job_listings(self):
        response = requests.get(f"{BASE_URL}/jobs/listings")
        self.assertEqual(response.status_code, 200)

    def test_health_status(self):
        response = requests.get(f"{BASE_URL}/health/status")
        self.assertEqual(response.status_code, 200)


if __name__ == "__main__":
    unittest.main()
