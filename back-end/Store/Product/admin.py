from django.contrib import admin
from .models import Product, Laptop, Mobile
# Register your models here.

admin.site.register(Product)
admin.site.register(Laptop)
admin.site.register(Mobile)