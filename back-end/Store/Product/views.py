from rest_framework.generics import (
    CreateAPIView,
    DestroyAPIView,
    GenericAPIView,
    ListAPIView,
    RetrieveAPIView,
    UpdateAPIView,
)
from rest_framework.mixins import DestroyModelMixin, UpdateModelMixin
from rest_framework.permissions import AllowAny, IsAdminUser
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Laptop, Phone
from .serializers import LaptopSerializer, PhoneSerializer


class CreatePhoneView(CreateAPIView):
    queryset = Phone.objects.all()
    serializer_class = PhoneSerializer
    permission_classes = []


class CreateLaptopView(CreateAPIView):
    queryset = Laptop.objects.all()
    serializer_class = LaptopSerializer
    permission_classes = []


class ListPhoneView(ListAPIView):
    queryset = Phone.objects.all()
    serializer_class = PhoneSerializer
    permission_classes = [AllowAny]


class ListLaptopView(ListAPIView):
    queryset = Laptop.objects.all()
    serializer_class = LaptopSerializer
    permission_classes = [AllowAny]


class DeletePhoneView(DestroyAPIView):
    lookup_field = "slug"
    queryset = Phone.objects.all()
    serializer_class = PhoneSerializer
    permission_classes = [IsAdminUser]


class DeleteLaptopView(DestroyAPIView):
    lookup_field = "slug"
    queryset = Laptop.objects.all()
    serializer_class = LaptopSerializer
    permission_classes = [IsAdminUser]


class GetPhoneView(RetrieveAPIView):
    lookup_field = "slug"
    queryset = Phone.objects.all()
    serializer_class = PhoneSerializer
    permission_classes = [AllowAny]


class GetLaptopView(RetrieveAPIView):
    lookup_field = "slug"
    queryset = Laptop.objects.all()
    serializer_class = LaptopSerializer
    permission_classes = [AllowAny]


class UpdatePhoneView(UpdateAPIView):
    lookup_field = "slug"
    queryset = Phone.objects.all()
    serializer_class = PhoneSerializer
    permission_classes = [IsAdminUser]


class UpdateLaptopView(UpdateAPIView):
    lookup_field = "slug"
    queryset = Laptop.objects.all()
    serializer_class = LaptopSerializer
    permission_classes = [IsAdminUser]


class GetProductBySlug(APIView):
    permission_classes = [AllowAny]

    def get(self, request, slug):
        print("this is slug view")
        print(slug)
        phone = Phone.objects.filter(slug=slug).first()
        laptop = Laptop.objects.filter(slug=slug).first()
        if phone:
            serializer = PhoneSerializer(phone)
            return Response(serializer.data)
        elif laptop:
            serializer = LaptopSerializer(laptop)
            return Response(serializer.data)
        else:
            return Response({"error": "Product not found"}, status=404)
