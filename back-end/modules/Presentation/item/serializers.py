from rest_framework import serializers
from ...Domain.item.models import Laptop, Mobile

class MobileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mobile
        fields = "__all__"


class LaptopSerializer(serializers.ModelSerializer):
    class Meta:
        model = Laptop
        fields = "__all__"
