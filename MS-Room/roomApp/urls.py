from django.urls import path, include
from .views.roomView import roomDetailView
from .views.roomView import roomCreateView
from .views.roomView import roomUpdateView
from .views.roomView import roomDeleteView
from rest_framework_simplejwt.views import (TokenObtainPairView, TokenRefreshView)

urlpatterns = [
    path('rooms', roomDetailView.as_view(), name='rooms'),
    path('room/create/', roomCreateView.as_view(), name='roomCreate'),
    path('room/update/', roomUpdateView.as_view(), name='roomUpdate'),
    path('room/delete/', roomDeleteView.as_view(), name='roomDelete'),
]
