import random
import uuid

import redis
from django.conf import settings
from rest_framework import serializers

from .models import Customer, User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = ["phone_number"]

    # set_password use to save password hashed in db
    def create(self, validate_data):
        # Generate a unique username
        username = uuid.uuid4().hex

        user = User(username=username)
        user.save()

        customer = Customer(user=user, phone_number=validate_data["phone_number"])
        customer.save()

        # Create a Redis connection
        r = redis.Redis(
            host=settings.REDIS_HOST, port=settings.REDIS_PORT, db=settings.REDIS_DB
        )

        # Generate a 6-digit OTP
        otp = random.randint(100000, 999999)

        # Store the OTP in Redis, associated with the user's phone number
        # Set it to expire after 60 seconds
        r.setex(customer.phone_number, 60, otp)

        print(f"Your OTP is: {otp}")

        return customer

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
