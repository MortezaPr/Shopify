from django.db import models


class Media(models.Model):
    file_type = models.CharField(max_length=50)
    file_size = models.IntegerField()
    upload_date = models.DateTimeField(auto_now_add=True)
