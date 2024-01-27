from rest_framework.generics import CreateAPIView, ListAPIView, RetrieveAPIView, DestroyAPIView, UpdateAPIView
from rest_framework.permissions import IsAdminUser

from .serializers import UserSerializer
from .models import User

class CreateUserView(CreateAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    permission_classes = []
    
class ListUserView(ListAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    permission_classes = [IsAdminUser]
    
class GetUserview(RetrieveAPIView):
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