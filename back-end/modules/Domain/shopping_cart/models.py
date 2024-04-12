from django.db import models
from datetime import datetime
from apps.item.models import Item
from apps.users.models import User

class shopping_cart(models.Model):
    is_paid = models.BooleanField(default=False, blank=False)
    owner = models.ForeignKey(User, on_delete=models.CASCADE, default="")
    
class CartItem(models.Model):
    cart = models.ForeignKey(shopping_cart, related_name='cart_items', on_delete=models.CASCADE)
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    date = models.DateTimeField(default=datetime.now)
    