from rest_framework import serializers
from .models import Laptop, Mobile

class MobileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mobile
        exclude = ['slug']


class LaptopSerializer(serializers.ModelSerializer):
    class Meta:
        model = Laptop
        exclude = ['slug']
