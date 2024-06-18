from django.http import HttpResponse
from django.urls import reverse
from rest_framework import status
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Media
from .mongo import (
    delete_picture_from_mongodb,
    get_picture_from_mongodb,
    save_picture_to_mongodb,
)


class GetMediaView(APIView):
    permission_classes = [AllowAny]

    def get(self, request, product_id, product_type, *args, **kwargs):
        print(product_id, product_type)
        try:
            media = Media.objects.filter(
                product_id=product_id, product_type=product_type
            ).first()

            return Response(
                {
                    "pic_id": media.pic_id,
                    "product_type": media.product_type,
                    "product_id": media.product_id,
                    "image_url": request.build_absolute_uri(
                        reverse("serve_image", args=[media.pic_id])
                    ),
                }
            )

        except Media.DoesNotExist:
            return Response({"error": "Product not found"}, status=404)


class UploadMediaView(APIView):
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        product_id = request.data.get("product_id")
        product_type = request.data.get("product_type")
        picture_data = (
            request.data.get("picture").read() if "picture" in request.data else None
        )

        picture_id = save_picture_to_mongodb(picture_data)

        media = Media(
            pic_id=str(picture_id), product_type=product_type, product_id=product_id
        )
        media.save()

        image_url = request.build_absolute_uri(
            reverse("serve_image", args=[media.pic_id])
        )

        return Response(
            {
                "message": "Media created successfully",
                "image_url": image_url,
                "inserted_id": str(picture_id),
                "media_id": media.id,
            },
            status=201,
        )


class DeleteMediaView(APIView):
    permission_classes = [AllowAny]

    def delete(self, request, product_id, product_type, format=None):
        print(product_id, product_type)
        try:
            media = Media.objects.filter(
                product_id=product_id, product_type=product_type
            ).first()
        except Media.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        # Delete the media object
        media.delete()

        # Delete the picture from MongoDB
        delete_picture_from_mongodb(media.pic_id)

        return Response(status=status.HTTP_204_NO_CONTENT)


def serve_image(request, media_id):
    picture_data = get_picture_from_mongodb(media_id)

    if picture_data:
        response = HttpResponse(picture_data, content_type="image/jpeg")
        return response
    else:
        return HttpResponse(status=404)
