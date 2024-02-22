from django.urls import path
from . import views


urlpatterns = [
    path('', views.index), # from root directory load views.index (index method in views.py)
]