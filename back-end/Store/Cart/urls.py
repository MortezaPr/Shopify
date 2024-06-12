from django.urls import path
from .views import CartItemView, ShoppingCartView

urlpatterns = [
    path(r"", view=ShoppingCartView.as_view(), name="list-create-shopping_cart"),
    path(r"item/<int:pk>/", view=CartItemView.as_view(), name="update-delete-retrieve-caritem")
]
