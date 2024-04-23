from django.contrib.auth.models import AbstractUser
from django.db import models


# Create your models here.
class User(AbstractUser):
    password = models.CharField(max_length=150, blank=True, null=True)

    def set_password(self, raw_password):
        super().set_password(raw_password)
        self.save()
