from django.urls import path
from .views import CartItemView, ShoppingCartView

urlpatterns = [
    path(r"shoppingcart/", view=ShoppingCartView.as_view(), name="list-create-shoppingcart"),
    path(r"cartitem/<int:pk>/", view=CartItemView.as_view(), name="update-delete-retrieve-caritem")
]
