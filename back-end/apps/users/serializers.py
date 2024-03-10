from rest_framework import serializers
from .models import User
import redis
import random


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["phone_number", "email", "password", "first_name", "last_name"]

    # set_password use to save password hashed in db
    def create(self, validate_data):
        user = User(phone_number=validate_data["phone_number"])
        user.save()

        # Create a Redis connection
        r = redis.Redis(host='localhost', port=6379, db=0)

        # Generate a 6-digit OTP
        otp = random.randint(100000, 999999)

        # Store the OTP in Redis, associated with the user's phone number
        # Set it to expire after 60 seconds
        r.setex(user.phone_number, 60, otp)

        print(f"Your OTP is: {otp}")
        
        return user
    
    def update(self, instance, validated_data):
        if "email" in validated_data:
            instance.email = validated_data.get("email", instance.email)
        
        if "first_name" in validated_data:
            instance.first_name = validated_data.get("first_name", instance.first_name)
        
        if "last_name" in validated_data:
            instance.last_name = validated_data.get("last_name", instance.last_name)
            
        if "password" in validated_data:
            instance.set_password(validated_data["password"])
        
        instance.save()
        return instance
        