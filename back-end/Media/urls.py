from django.urls import path

from .views import GetMediaView, UploadMediaView, DeleteMediaView ,serve_image

urlpatterns = [
    path("get-media/<str:product_type>/<int:product_id>/", view=GetMediaView.as_view(), name="get_media"),
    path(r"upload-media/", view=UploadMediaView.as_view(), name="upload_media"),
    path("delete-media/<str:product_type>/<int:product_id>/", view=DeleteMediaView.as_view(), name="delete_media"),
    path('image/<str:media_id>/', serve_image, name='serve_image'),
]
