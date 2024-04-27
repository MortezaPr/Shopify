from django.core.exceptions import ObjectDoesNotExist
from django.http import JsonResponse
from ...Domain.customer import Customer
from .redis import RedisClient


def verify_otp(phone_number, otp):
    # Get the Redis client
    redis_client = RedisClient().r

    # Get the OTP stored in Redis
    redis_otp = redis_client.get(phone_number)

    if redis_otp is not None and otp == redis_otp.decode():
        try:
            # If OTP is correct, set is_verified to True
            customer = Customer.objects.get(phone_number=phone_number)
            customer.is_verified = True
            customer.save()
            return JsonResponse({"status": "verified"})
        except ObjectDoesNotExist:
            return JsonResponse({"error": "Customer does not exist"}, status=400)
    else:
        return JsonResponse({"error": "Invalid OTP"}, status=400)
