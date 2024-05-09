from rest_framework import serializers

from ..Domain.media import Media


class MediaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Media
        fields = ["file_type", "file_size", "upload_date"]
