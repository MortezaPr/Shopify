import random

from .redis import RedisClient


def generate_otp(phone_number):
    # Generate a 6-digit OTP
    otp = random.randint(100000, 999999)

    # Get the Redis client
    redis_client = RedisClient().r

    # Store the OTP in Redis, associated with the user's phone number
    # Set it to expire after 60 seconds
    redis_client.setex(phone_number, 60, otp)

    print(f"Your OTP is: {otp}")
    return otp
