from rest_framework import serializers
from ...Domain.shopping_cart.models import CartItem, shopping_cart

class CartItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = CartItem
        fields = ['item', 'date']

class shopping_cartSerializer(serializers.ModelSerializer):
    cart_items = CartItemSerializer(many=True, read_only=True)

    class Meta:
        model = shopping_cart
        fields = ['cart_items']