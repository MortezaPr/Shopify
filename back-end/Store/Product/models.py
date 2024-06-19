from django.db import models
from django.utils.text import slugify


class Product(models.Model):
    name = models.TextField(max_length=60, blank=True, null=False)
    price = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=False)
    slug = models.SlugField(unique=True)
    description = models.TextField(max_length=128, null=True, blank=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            original_slug = slugify(self.name)
            unique_slug = original_slug
            num = 1
            while Product.objects.filter(slug=unique_slug).exists():
                unique_slug = f"{original_slug}-{num}"
                num += 1
            self.slug = unique_slug
        super().save(*args, **kwargs)


class Mobile(Product):
    resolution = models.CharField(max_length=128, null=True, blank=True)
    screen_tech = models.TextField(max_length=128, null=True, blank=True)
    os_version = models.CharField(max_length=128, null=True, blank=True)
    size = models.DecimalField(max_digits=3, decimal_places=1, null=True, blank=True)


class Laptop(Product):
    processor = models.CharField(max_length=32, null=True, blank=True)
    ram = models.CharField(max_length=32, null=True, blank=True)
    internal_memory = models.CharField(max_length=32, null=True, blank=True)
    GPU = models.CharField(max_length=32, null=True, blank=True)
