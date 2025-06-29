from django.shortcuts import render
from django.http import HttpResponse
from .models import User
from rest_framework.response import Response

# Create your views here.
def index(request, id):
    ls = User.objects.get(id = id)
    return HttpResponse('<h1>%s<h1/>' % ls)

def grame(request):
    return HttpResponse('Welcome to the grame page.')