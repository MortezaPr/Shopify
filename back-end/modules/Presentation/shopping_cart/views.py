from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticated

from .serializers import CartItemSerializer, shopping_cartSerializer
from ...Domain.shopping_cart.models import CartItem, shopping_cart


class shopping_cartView(ListCreateAPIView):
    serializer_class = shopping_cartSerializer
    queryset = shopping_cart.objects.all()
    permission_classes = [IsAuthenticated,]
    
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
        
        
class CartItemView(RetrieveUpdateDestroyAPIView):
    serializer_class = CartItemSerializer
    queryset = CartItem.objects.all()
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        return CartItem.objects.filter(cart__owner=self.request.user)
