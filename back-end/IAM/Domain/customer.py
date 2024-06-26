from django.db import models
from .user import User


class Customer(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    phone_number = models.CharField(
        unique=True, max_length=12, blank=False, default="0123456789"
    )
    is_verified = models.BooleanField(default=False)
    address = models.CharField(max_length=200, blank=True, null=True)
