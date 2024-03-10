from django.urls import path
from .views import CreateUserView, UserListView, UserDetailView, UpdateUserView, DeleteUserView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

app_name = "users"

urlpatterns = [
    path(r"list/", view=UserListView.as_view(), name="user_list"),
    path(r"list/<int:pk>/", view=UserDetailView.as_view(), name="user_detail"),
    path(r"update/<int:id>/", view=UpdateUserView.as_view(), name="update_user"),
    path(r"delete/<int:id>/", view=DeleteUserView.as_view(), name="delete_user"),
    path(r"signup/", view=CreateUserView.as_view(), name="user_create"),
    path(r"login/", view=TokenObtainPairView.as_view(), name="user_token"),
    path(r"token/refresh/", view=TokenRefreshView.as_view(), name="user_token_refresh")
]