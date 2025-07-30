from django.urls import path
from . import views

urlpatterns = [
    path('<int:id>', views.index, name='index'),
    path('appusers/', views.appusers, name='grame it'),
    path('api/register/', views.register, name='register'),
    path('api/login/', views.login, name='login'),
]