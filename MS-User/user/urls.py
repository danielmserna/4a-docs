from django.urls import path
from rest_framework_simplejwt.views import (TokenObtainPairView, TokenRefreshView)
from userApp import views

urlpatterns = [
path('login/', TokenObtainPairView.as_view()),
path('refresh/', TokenRefreshView.as_view()),
path('verifyToken/', views.VerifyTokenView.as_view()),
path('user/', views.UserCreateView.as_view()),
path('user/<int:pk>/', views.UserDetailView.as_view()),]