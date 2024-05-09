from django.urls import path

from .views import GetMediaView, UploadMediaView

app_name = "media"

urlpatterns = [
    path(r"get-media/", view=GetMediaView.as_view(), name="media"),
    path(r"upload-media/", view=UploadMediaView.as_view(), name="UPLOAD"),
]
