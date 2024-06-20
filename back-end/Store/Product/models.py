from django.db import models


class Product(models.Model):
    title = models.TextField(max_length=250, blank=True, null=False)
    price = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=False)
    slug = models.SlugField(unique=True, blank=True, null=True)
    description = models.TextField(max_length=450, null=True, blank=True)
    color = models.CharField(max_length=32, null=True, blank=True)


class Phone(Product):
    resolution = models.CharField(max_length=128, null=True, blank=True)
    screen_tech = models.TextField(max_length=128, null=True, blank=True)
    os_version = models.CharField(max_length=128, null=True, blank=True)
    size = models.DecimalField(max_digits=3, decimal_places=1, null=True, blank=True)


class Laptop(Product):
    processor = models.CharField(max_length=32, null=True, blank=True)
    ram = models.CharField(max_length=32, null=True, blank=True)
    internal_memory = models.CharField(max_length=32, null=True, blank=True)
    GPU = models.CharField(max_length=32, null=True, blank=True)
