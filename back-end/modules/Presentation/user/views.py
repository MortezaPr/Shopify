from django.conf import settings
from django.contrib.auth.hashers import is_password_usable
from django.core.exceptions import ObjectDoesNotExist
from django.http import JsonResponse
from redis import Redis
from rest_framework import exceptions
from rest_framework.generics import (
    CreateAPIView,
    DestroyAPIView,
    ListAPIView,
    RetrieveAPIView,
    UpdateAPIView,
)
from rest_framework.permissions import AllowAny, IsAdminUser
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken

from .authentication import (
    create_access_token,
    create_refresh_token,
    decode_access_token,
    decode_refresh_token,
)
from ...Domain.user.models import Customer, User
from .serializers import CustomerSerializer, UserSerializer
from .utils import set_otp


class CreateUserView(CreateAPIView):
    serializer_class = CustomerSerializer
    queryset = User.objects.all()
    permission_classes = []


class UserListView(ListAPIView):
    serializer_class = CustomerSerializer
    queryset = User.objects.all()
    permission_classes = [IsAdminUser]


class UserDetailView(RetrieveAPIView):
    lookup_field = "id"
    serializer_class = CustomerSerializer
    queryset = User.objects.all()
    permission_classes = [IsAdminUser]


class UpdateUserView(UpdateAPIView):
    lookup_field = "id"
    serializer_class = CustomerSerializer
    queryset = User.objects.all()
    permission_classes = [IsAdminUser]


class DeleteUserView(DestroyAPIView):
    lookup_field = "id"
    serializer_class = CustomerSerializer
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


class LoginView(APIView):
    permission_classes = [AllowAny]

    def generate_tokens(self, user):

        refresh = create_refresh_token(user.id)

        access_token = create_access_token(user.id)

        return {"access": access_token, "refresh": str(refresh)}

    def post(self, request):
        phone_number = request.data.get("phone_number")
        if phone_number is not None:

            # Customer
            customer = Customer.objects.filter(phone_number=phone_number).first()
            if customer is None:
                raise exceptions.AuthenticationFailed("User not found")

            user = customer.user
            password = request.data.get("password")
            otp = request.data.get("otp")
            if password and user.password and not user.check_password(password):
                raise exceptions.AuthenticationFailed("Incorrect password")

            if otp and not self.check_otp(phone_number, otp):
                raise exceptions.AuthenticationFailed("Incorrect OTP")

            if otp and not customer.is_verified:
                customer.is_verified = True
                customer.save()

            if not password and not otp:
                raise exceptions.AuthenticationFailed(
                    "Either password or OTP must be provided"
                )

        else:
            # Admin
            username = request.data.get("username")
            user = User.objects.filter(username=username).first()

            if user is None or not user.is_staff:
                raise exceptions.AuthenticationFailed("Admin user not found")

            # Check if the password is correct
            if not user.check_password(request.data.get("password", "")):
                raise exceptions.AuthenticationFailed("Incorrect password")

        access_token, refresh_token = self.generate_tokens(user).values()
        response = Response()
        response.set_cookie(key="refreshToken", value=refresh_token, httponly=True)
        response.data = {"token": access_token}
        return response

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


class RefreshTokenView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        refresh_token = request.COOKIES.get("refreshToken")
        id = decode_refresh_token(refresh_token)
        access_token = create_access_token(id)
        return Response({"token": access_token})


# this is a test view to check if the token is working
class TestView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        access_token = request.data.get("access_token")
        user_id = decode_access_token(access_token)
        print(user_id)
        user = User.objects.get(id=user_id)
        serializer = UserSerializer(user)
        return Response(serializer.data)
