from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticated

from .serializers import CartItemSerializer, ShoppingCartSerializer
from.models import CartItem, ShoppingCart


class ShoppingCartView(ListCreateAPIView):
    serializer_class = ShoppingCartSerializer
    queryset = ShoppingCart.objects.all()
    permission_classes = [IsAuthenticated,]
    
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
        
        
class CartItemView(RetrieveUpdateDestroyAPIView):
    serializer_class = CartItemSerializer
    queryset = CartItem.objects.all()
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        return CartItem.objects.filter(cart__owner=self.request.user)
