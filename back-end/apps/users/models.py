from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.
class User(AbstractUser):
    phone_number = models.CharField(unique=True, max_length=12, blank=False, default="0123456789")
    is_verified = models.BooleanField(default=False)
    
    USERNAME_FIELD = "phone_number"
    REQUIRED_FIELDS = []