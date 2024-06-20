from django.urls import path

from .views import *

app_name = "Product"

urlpatterns = [
    # Laptop API
    path(r"laptop/create/", view=CreateLaptopView.as_view(), name="create_new_laptop"),
    path(
        r"laptop/list/", view=ListLaptopView.as_view(), name="get_the_list_of_laptops"
    ),
    path(
        r"laptop/list/<slug:slug>", view=GetLaptopView.as_view(), name="get_one_laptop"
    ),
    path(
        r"laptop/update/<slug:slug>",
        view=UpdateLaptopView.as_view(),
        name="update_laptop",
    ),
    path(
        r"laptop/delete/<slug:slug>/",
        view=DeleteLaptopView.as_view(),
        name="delete_laptop",
    ),
    # Phone API
    path(r"phone/create/", view=CreatePhoneView.as_view(), name="create_new_phone"),
    path(r"phone/list/", view=ListPhoneView.as_view(), name="get_the_list_of_phones"),
    path(r"phone/list/<slug:slug>", view=GetPhoneView.as_view(), name="get_one_phone"),
    path(
        r"phone/update/<slug:slug>", view=UpdatePhoneView.as_view(), name="update_phone"
    ),
    path(
        r"phone/delete/<slug:slug>/",
        view=DeletePhoneView.as_view(),
        name="delete_phone",
    ),
    path(
        r"get-by-slug/<slug:slug>/",
        view=GetProductBySlug.as_view(),
        name="get_product_by_slug",
    ),
    path("product-list/", ListAllProductsView.as_view(), name="list-products"),
]
