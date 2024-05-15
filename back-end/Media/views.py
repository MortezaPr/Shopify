
from rest_framework.permissions import AllowAny
from django.http import HttpResponse
from rest_framework.response import Response
from django.urls import reverse
from rest_framework.views import APIView
from .mongo import save_picture_to_mongodb, get_picture_from_mongodb, delete_picture_from_mongodb
from .models import Media
from rest_framework import status



class GetMediaView(APIView):
    permission_classes = [AllowAny]

    def get(self, request, media_id, *args, **kwargs):
        try:
            media = Media.objects.get(id=media_id)

            return Response({
                'id': media.id,
                'title': media.title,
                'pic_id': media.pic_id,
                'image_url': request.build_absolute_uri(reverse('serve_image', args=[media.pic_id])),
                })
    
        except Media.DoesNotExist:
            return Response({
                'error': 'Salon not found'
                }, status=404)


class UploadMediaView(APIView):
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        title = request.data.get('title')
        picture_data = request.data.get('picture').read() if 'picture' in request.data else None


        picture_id = save_picture_to_mongodb(picture_data)

        media = Media(title=title, pic_id=str(picture_id))
        media.save()

        image_url = request.build_absolute_uri(reverse('serve_image', args=[media.pic_id]))
            

        return Response({
            'message': 'Media created successfully',
            'image_url': image_url,
            'inserted_id': str(picture_id),
            'media_id': media.id
        }, status=201)


class DeleteMediaView(APIView):
    permission_classes = [AllowAny]
    
    def delete(self, request, media_id, format=None):
        try:
            media = Media.objects.get(id=media_id)
        except Media.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        # Delete the media object
        media.delete()

        # Delete the picture from MongoDB
        delete_picture_from_mongodb(media.pic_id)

        return Response(status=status.HTTP_204_NO_CONTENT)


def serve_image(request, picture_id):
    picture_data = get_picture_from_mongodb(picture_id)

    if picture_data:
        response = HttpResponse(picture_data, content_type='image/jpeg')
        return response
    else:
        return HttpResponse(status=404)