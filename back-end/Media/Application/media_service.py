from .media_storage_interface import MediaStorageInterface


class MediaService:
    def __init__(self, media_storage: MediaStorageInterface):
        self.media_storage = media_storage

    def upload_media(self, media):
        pass
        # Use the media_storage interface here

    def delete_media(self, media_id):
        pass
        # Use the media_storage interface here

    def get_media(self, media_id):
        pass
        # Use the media_storage interface here
