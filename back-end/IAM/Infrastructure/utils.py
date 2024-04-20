# utils.py or helpers.py
import random

import redis
from django.conf import settings


def set_otp(customer):
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
    return otp
