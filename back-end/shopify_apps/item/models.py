from django.db import models
from django.utils.text import slugify

class Item(models.Model):
    name = models.CharField(max_length=10, blank=True, null=False)
    price = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=False)
    image = models.ImageField(upload_to="item_image", null=True, blank=True)
    slug = models.SlugField(unique=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)
        
class Mobile(Item):
    resolution = models.CharField(max_length=128, null=True, blank=True)
    screen_tech = models.TextField(max_length=128, null=True, blank=True)
    os_version = models.CharField(max_length=128, null=True, blank=True)
    size = models.DecimalField(max_digits=3, decimal_places=1, null=True, blank=True)
    description = models.TextField(max_length=128, null=True, blank=True)
    
class Laptop(Item):
    processor = models.CharField(max_length=32, null=True, blank=True)
    ram = models.CharField(max_length=32, null=True, blank=True)
    internal_memory = models.CharField(max_length=32, null=True, blank=True)
    GPU = models.CharField(max_length=32, null=True, blank=True)
