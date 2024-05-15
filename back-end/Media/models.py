from django.db import models


class Media(models.Model):
    title = models.CharField(max_length=100)
    pic_id = models.CharField(max_length=200)


    def __str__(self):
        return self.title

