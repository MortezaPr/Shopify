from django.urls import path
from .views import *
app_name = "item"

urlpatterns = [
    path(r"laptop/create/", view=CreateLaptopView.as_view(), name="create_new_laptop"),
    path(r"laptop/list/", view=ListLaptopView.as_view(), name="get_the_list_of_laptops"),
    path(r"laptop/list/<slug:slug>", view=GetLaptopView.as_view(), name="get_one_laptop"),
    path(r"laptop/update/<slug:slug>", view=UpdateLaptopView.as_view(), name="update_laptop"),
    path(r"laptop/delete/<slug:slug>/", view=DeleteLaptopView.as_view(), name="delete_laptop"),

    path(r"mobile/create/", view=CreateMobileView.as_view(), name="create_new_laptop"),
    path(r"mobile/list/", view=ListMobileView.as_view(), name="get_the_list_of_laptops"),
    path(r"mobile/list/<slug:slug>", view=GetMobileView.as_view(), name="get_one_laptop"),
    path(r"mobile/update/<slug:slug>", view=UpdateMobileView.as_view(), name="update_laptop"),
    path(r"mobile/delete/<slug:slug>/", view=DeleteMobileView.as_view(), name="delete_laptop"),
]