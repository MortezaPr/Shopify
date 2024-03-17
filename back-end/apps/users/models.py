from django.contrib.auth.models import AbstractUser
from django.db import models


# Create your models here.
class User(AbstractUser):
    password = models.CharField(max_length=150, blank=True, null=True)

    def set_password(self, raw_password):
        super().set_password(raw_password)
        self.save()


class Customer(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    phone_number = models.CharField(
        unique=True, max_length=12, blank=False, default="0123456789"
    )
    is_verified = models.BooleanField(default=False)
    address = models.CharField(max_length=200, blank=True, null=True)
