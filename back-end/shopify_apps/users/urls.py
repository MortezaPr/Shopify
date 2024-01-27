from django.urls import path
from .views import CreateUserView, ListUserView, GetUserview, UpdateUserView, DeleteUserView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

app_name = "users"

urlpatterns = [
    path(r"list/", view=ListUserView.as_view(), name="list_of_user"),
    path(r"list/<int:pk>/", view=GetUserview.as_view(), name="get_user_by_id"),
    path(r"update/<int:id>/", view=UpdateUserView.as_view(), name="update_user"),
    path(r"delete/<int:id>/", view=DeleteUserView.as_view(), name="delete_user"),
    path(r"create/", view=CreateUserView.as_view(), name="user_create"),
    path(r"token/", view=TokenObtainPairView.as_view(), name="user_token"),
    path(r"token/refresh/", view=TokenRefreshView.as_view(), name="user_token_refresh")
]