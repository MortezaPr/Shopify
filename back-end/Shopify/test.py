from Media.Domain.media import Media


def check_db_connection():
    try:
        Media.objects.all()
        print("Connected to MongoDB")
    except Exception as e:
        print(f"Not connected to MongoDB: {e}")
