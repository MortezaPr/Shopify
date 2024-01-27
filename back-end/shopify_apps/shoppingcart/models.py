from django.db import models
from datetime import datetime
from shopify_apps.item.models import Item
from shopify_apps.users.models import User

class ShoppingCart(models.Model):
    is_paid = models.BooleanField(default=False, blank=False)
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    
class CartItem(models.Model):
    cart = models.ForeignKey(ShoppingCart, related_name='cart_items', on_delete=models.CASCADE)
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    date = models.DateTimeField(default=datetime.now)
    