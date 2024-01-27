from django.contrib import admin
from .models import Item, Laptop, Mobile
# Register your models here.

admin.site.register(Item)
admin.site.register(Laptop)
admin.site.register(Mobile)