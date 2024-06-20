from django.contrib import admin

from .models import Laptop, Phone, Product

# Register your models here.

admin.site.register(Product)
admin.site.register(Laptop)
admin.site.register(Phone)
