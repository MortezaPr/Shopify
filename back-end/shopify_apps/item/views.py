from rest_framework.generics import CreateAPIView,UpdateAPIView, ListAPIView, RetrieveAPIView, DestroyAPIView, GenericAPIView
from rest_framework.mixins import UpdateModelMixin, DestroyModelMixin
from rest_framework.permissions import IsAdminUser, AllowAny

from .models import Mobile, Laptop
from .serializers import MobileSerializer, LaptopSerializer

class CreateMobileView(CreateAPIView):
    queryset = Mobile.objects.all()
    serializer_class = MobileSerializer
    permission_classes = [IsAdminUser]
    
class CreateLaptopView(CreateAPIView):
    queryset = Laptop.objects.all()
    serializer_class = LaptopSerializer
    permission_classes = [IsAdminUser]
    
class ListMobileView(ListAPIView):
    queryset = Mobile.objects.all()
    serializer_class = MobileSerializer
    permission_classes = [AllowAny]
    
class ListLaptopView(ListAPIView):
    queryset = Laptop.objects.all()
    serializer_class = LaptopSerializer
    permission_classes = [AllowAny]

class DeleteMobileView(DestroyAPIView):
    lookup_field = "slug"
    queryset = Mobile.objects.all()
    serializer_class = MobileSerializer
    permission_classes = [IsAdminUser]

class DeleteLaptopView(DestroyAPIView):
    lookup_field = "slug"
    queryset = Laptop.objects.all()
    serializer_class = LaptopSerializer
    permission_classes = [IsAdminUser]

class GetMobileView(RetrieveAPIView):
    lookup_field = "slug"
    queryset = Mobile.objects.all()
    serializer_class = MobileSerializer
    permission_classes = [AllowAny]

class GetLaptopView(RetrieveAPIView):
    lookup_field = "slug"
    queryset = Laptop.objects.all()
    serializer_class = LaptopSerializer
    permission_classes = [AllowAny]

class UpdateMobileView(UpdateAPIView):
    lookup_field = "slug"
    queryset = Mobile.objects.all()
    serializer_class = MobileSerializer
    permission_classes = [IsAdminUser]

class UpdateLaptopView(UpdateAPIView):
    lookup_field = "slug"
    queryset = Laptop.objects.all()
    serializer_class = LaptopSerializer
    permission_classes = [IsAdminUser]
