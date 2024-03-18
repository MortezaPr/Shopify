from django.urls import path

from .views import (
    CheckPassword,
    CheckUserStatusView,
    CreateUserView,
    DeleteUserView,
    LoginView,
    RefreshTokenView,
    SetNewOTPView,
    TestView,
    UpdateUserView,
    UserDetailView,
    UserListView,
    VerifyUserView,
)

app_name = "users"

urlpatterns = [
    path(r"list/", view=UserListView.as_view(), name="user_list"),
    path(r"list/<int:pk>/", view=UserDetailView.as_view(), name="user_detail"),
    path(r"update/<int:id>/", view=UpdateUserView.as_view(), name="update_user"),
    path(r"delete/<int:id>/", view=DeleteUserView.as_view(), name="delete_user"),
    path(r"signup/", view=CreateUserView.as_view(), name="user_create"),
    path(r"login/", view=LoginView.as_view(), name="login_user"),
    path(
        r"check-user/<str:phone_number>/",
        view=CheckUserStatusView.as_view(),
        name="check_user",
    ),
    path(r"verify-user/", view=VerifyUserView.as_view(), name="verify_user"),
    path(r"check-password/", view=CheckPassword.as_view(), name="check_password"),
    path(r"set-new-otp/", view=SetNewOTPView.as_view(), name="set_new_otp"),
    path(r"token/refresh/", view=RefreshTokenView.as_view(), name="user_token_refresh"),
    path(r"test/", view=TestView.as_view(), name="test_view"),
]
