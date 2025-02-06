# from google.cloud import storage
# import openai

# IoT Service
def monitor_routine_device(device_id: str):
    # Simulate IoT data fetch
    device_data = {"temperature": 22.5, "status": "active"}
    return f"Device {device_id} status: {device_data['status']}, Temperature: {device_data['temperature']}°C"
