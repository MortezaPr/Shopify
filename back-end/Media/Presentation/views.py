from pymongo import MongoClient
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView


class GetMediaView(APIView):
    permission_classes = [AllowAny]

    def get(self, request, *args, **kwargs):
        client = MongoClient(
            "mongodb://admin:password@mongodb:27017"
        )  # replace with your MongoDB connection string
        print(client.list_database_names())
        db = client["mediaDb"]
        collection = db["pictures"]
        document = {"name": "Picture1", "size": "500KB"}
        collection.insert_one(document)
        try:
            collection.find_one()  # try to fetch one document from the collection
            return Response({"message": "Connected to MongoDB"})
        except Exception as e:
            return Response({"message": f"Not connected to MongoDB: {str(e)}"})


from django.http import FileResponse
from rest_framework.parsers import MultiPartParser
from rest_framework.response import Response
from rest_framework.views import APIView

from ..Domain.media import Media  # Import your Media model
from .serializers import (  # Assuming you have a serializer for your Media model
    MediaSerializer,
)


class UploadMediaView(APIView):
    permission_classes = [AllowAny]
    parser_class = (MultiPartParser,)  # Use MultiPartParser for file uploads

    def post(self, request, *args, **kwargs):
        serializer = MediaSerializer(
            data=request.data
        )  # Use your serializer to validate the data
        if serializer.is_valid():
            serializer.save()  # Save the validated data to the database
            return Response({"message": "File uploaded successfully"}, status=201)
        else:
            return Response(
                serializer.errors, status=400
            )  # Return errors if validation fails


class DeleteMediaView(APIView):
    pass
