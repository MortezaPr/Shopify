from django.urls import path
from .views import CartItemView, shopping_cartView

urlpatterns = [
    path(r"shopping_cart/", view=shopping_cartView.as_view(), name="list-create-shopping_cart"),
    path(r"cartitem/<int:pk>/", view=CartItemView.as_view(), name="update-delete-retrieve-caritem")
]
