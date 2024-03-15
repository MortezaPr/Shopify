from django.conf import settings
from django.core.exceptions import ObjectDoesNotExist
from django.http import JsonResponse
from redis import Redis
from rest_framework.generics import (
    CreateAPIView,
    DestroyAPIView,
    ListAPIView,
    RetrieveAPIView,
    UpdateAPIView,
)
from rest_framework.permissions import AllowAny, IsAdminUser
from rest_framework.views import APIView

from .models import Customer, User
from .serializers import UserSerializer


class CreateUserView(CreateAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    permission_classes = []


class UserListView(ListAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    permission_classes = [IsAdminUser]


class UserDetailView(RetrieveAPIView):
    lookup_field = "id"
    serializer_class = UserSerializer
    queryset = User.objects.all()
    permission_classes = [IsAdminUser]


class UpdateUserView(UpdateAPIView):
    lookup_field = "id"
    serializer_class = UserSerializer
    queryset = User.objects.all()
    permission_classes = [IsAdminUser]


class DeleteUserView(DestroyAPIView):
    lookup_field = "id"
    serializer_class = UserSerializer
    queryset = User.objects.all()
    permission_classes = [IsAdminUser]


class CheckUserStatusView(APIView):
    permission_classes = [AllowAny]

    def get(self, request, phone_number):
        exists = Customer.objects.filter(phone_number=phone_number).exists()
        is_verified = False
        if exists:
            customer = Customer.objects.get(phone_number=phone_number)
            is_verified = customer.is_verified
        return JsonResponse({"exists": exists, "is_verified": is_verified})


class VerifyUserView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        phone_number = request.data.get("phone_number")
        otp = request.data.get("otp")

        print(type(otp))

        # Connect to Redis
        redis_conn = Redis(
            host=settings.REDIS_HOST, port=settings.REDIS_PORT, db=settings.REDIS_DB
        )

        # Get the OTP stored in Redis
        redis_otp = redis_conn.get(phone_number)
        print(type(redis_otp))
        print(f"this is otp stored in redis {redis_otp}")

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
