import uuid

from rest_framework import serializers

from ..Domain.customer import Customer
from ..Domain.user import User
from ..Infrastructure.redis.generateOTP import generate_otp


class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = [
            "id",
            "phone_number",
        ]

    # set_password use to save password hashed in db
    def create(self, validate_data):
        # Generate a unique username
        username = uuid.uuid4().hex

        user = User(username=validate_data["phone_number"])
        user.save()

        customer = Customer(user=user, phone_number=validate_data["phone_number"])
        customer.save()

        # Set the OTP
        generate_otp(customer.phone_number)

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


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            "id",
            "username",
            "email",
            "first_name",
            "last_name",
        ]
