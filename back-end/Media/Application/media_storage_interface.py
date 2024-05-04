from abc import ABC, abstractmethod


class MediaStorageInterface(ABC):
    @abstractmethod
    def save_media(self, media):
        pass

    @abstractmethod
    def delete_media(self, media_id):
        pass

    @abstractmethod
    def get_media(self, media_id):
        pass
