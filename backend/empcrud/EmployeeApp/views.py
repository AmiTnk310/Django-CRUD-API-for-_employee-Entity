from django.shortcuts import render
from .models import employee
from .serializers import EmployeeSerializer
from rest_framework import viewsets

# Create your views here.


class EmployeeView(viewsets.ModelViewSet):
    queryset = employee.objects.all()
    serializer_class = EmployeeSerializer