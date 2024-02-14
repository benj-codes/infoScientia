from django.shortcuts import render
from .models import Account
from .serializers import AccountSerializer
from rest_framework import generics

# Create your views here.
class LeadListCreate(generics.ListCreateAPIView):
    queryset = Account.objects.all()
    serializer_class = AccountSerializer
