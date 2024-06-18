from django.db import models


class Media(models.Model):
    pic_id = models.CharField(max_length=200, null=False, blank=False)
    product_id = models.BigIntegerField(null=False, blank=False)

    def __str__(self):
        return self.pic_id
