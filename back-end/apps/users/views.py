from django.conf import settings
from django.contrib.auth.hashers import is_password_usable
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
from .utils import set_otp


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
        password_set = False
        if exists:
            customer = Customer.objects.get(phone_number=phone_number)
            is_verified = customer.is_verified
            user = customer.user
            password_set = user.password is not None and is_password_usable(
                user.password
            )
        return JsonResponse(
            {"exists": exists, "is_verified": is_verified, "password_set": password_set}
        )


class VerifyUserView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        phone_number = request.data.get("phone_number")
        otp = request.data.get("otp")

        # Connect to Redis
        redis_conn = Redis(
            host=settings.REDIS_HOST, port=settings.REDIS_PORT, db=settings.REDIS_DB
        )

        # Get the OTP stored in Redis
        redis_otp = redis_conn.get(phone_number)

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


class SetNewOTPView(APIView):
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        phone_number = request.data.get("phone_number")
        print(phone_number)
        try:
            customer = Customer.objects.get(phone_number=phone_number)
        except Customer.DoesNotExist:
            return JsonResponse({"error": "Customer does not exist"}, status=400)

        otp = set_otp(customer)
        return JsonResponse({"status": "OTP set", "otp": otp})


class CheckPassword(APIView):
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        phone_number = request.data.get("phone_number")
        password = request.data.get("password")
        print(password)
        print(phone_number)
        try:
            customer = Customer.objects.get(phone_number=phone_number)
        except Customer.DoesNotExist:
            return JsonResponse({"error": "Customer does not exist"}, status=400)

        user = customer.user
        if user.check_password(password):
            return JsonResponse({"status": True})
        else:
            return JsonResponse({"error": False}, status=400)


# Token

from django.conf import settings
from redis import Redis
from rest_framework import exceptions, fields
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

from .models import Customer, User


class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)

        # Check if the user is logging in with a phone number
        if "phone_number" in self.initial_data:
            print("ssssss")
            phone_number = self.initial_data["phone_number"]
            customer = Customer.objects.filter(phone_number=phone_number).first()

            if customer is None:
                raise exceptions.AuthenticationFailed("User not found")

            user = customer.user

            # Check if the user has a password
            if user.password:
                # If the user has a password, check if it's correct
                if not user.check_password(self.initial_data.get("password", "")):
                    raise exceptions.AuthenticationFailed("Incorrect password")
            else:
                # If the user doesn't have a password, check the OTP
                otp = self.initial_data.get("otp")
                if otp is None or not check_otp(
                    phone_number, otp
                ):  # You need to implement the check_otp function
                    raise exceptions.AuthenticationFailed("Incorrect OTP")
        else:
            # If the user is logging in with a username, they must be an admin
            username = self.initial_data.get("username")
            user = User.objects.filter(username=username).first()

            if user is None or not user.is_staff:
                raise exceptions.AuthenticationFailed("Admin user not found")

            # Check if the password is correct
            if not user.check_password(self.initial_data.get("password", "")):
                raise exceptions.AuthenticationFailed("Incorrect password")

        return data


def check_otp(self, phone_number, otp):
    # Connect to Redis
    redis_conn = Redis(
        host=settings.REDIS_HOST, port=settings.REDIS_PORT, db=settings.REDIS_DB
    )
    # Get the OTP stored in Redis
    redis_otp = redis_conn.get(phone_number)

    # Check if the OTP is correct
    if redis_otp is not None and otp == redis_otp.decode():
        return True

    return False


class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer
