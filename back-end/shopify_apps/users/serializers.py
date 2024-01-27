from rest_framework import serializers
from .models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["email", "password", "image", "first_name", "last_name"]

    # set_password use to save password hashed in db
    def create(self, validate_data):
        user = User(email=validate_data["email"])
        user.set_password(validate_data["password"])
        user.save()
        return user
    
    def update(self, instance, validated_data):
        if "email" in validated_data:
            instance.email = validated_data.get("email", instance.email)
        
        if "image" in validated_data:
            instance.image = validated_data.get("image", instance.image)
        
        if "first_name" in validated_data:
            instance.first_name = validated_data.get("first_name", instance.first_name)
        
        if "last_name" in validated_data:
            instance.last_name = validated_data.get("last_name", instance.last_name)
            
        if "password" in validated_data:
            instance.set_password(validated_data["password"])
        
        instance.save()
        return instance
        