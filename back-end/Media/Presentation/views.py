from pymongo import MongoClient
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView


class GetMediaView(APIView):
    permission_classes = [AllowAny]

    def get(self, request, *args, **kwargs):
        client = MongoClient(
            "mongodb://admin:password@localhost:27017/"
        )  # replace with your MongoDB connection string
        db = client["mongoDb"]
        collection = db["pictures"]
        try:
            collection.find_one()  # try to fetch one document from the collection
            return Response({"message": "Connected to MongoDB"})
        except Exception as e:
            return Response({"message": f"Not connected to MongoDB: {str(e)}"})


class UploadMediaView(APIView):
    permission_classes = [AllowAny]
    Response({"message": "Connected to MongoDB"})


class DeleteMediaView(APIView):
    pass


class GetMediaView(APIView):
    pass
