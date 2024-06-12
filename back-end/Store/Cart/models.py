from django.db import models
from datetime import datetime
from ..Product.models import Product
from IAM.Domain.user import User

class Cart(models.Model):
    is_paid = models.BooleanField(default=False, blank=False)
    owner = models.ForeignKey(User, on_delete=models.CASCADE, default="")
    
class CartItem(models.Model):
    cart = models.ForeignKey(Cart, related_name='cart_items', on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    date = models.DateTimeField(default=datetime.now)
    