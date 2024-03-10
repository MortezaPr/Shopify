from django.contrib import admin
from .models import shopping_cart, CartItem
# Register your models here.

admin.site.register(CartItem)
admin.site.register(shopping_cart)