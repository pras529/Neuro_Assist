from google.cloud import storage


# Cloud Storage Service
def upload_file(bucket_name: str, source_file: str, destination_blob: str):
    client = storage.Client()
    bucket = client.bucket(bucket_name)
    blob = bucket.blob(destination_blob)
    blob.upload_from_filename(source_file)
    return f"File {source_file} uploaded to {destination_blob}."
