from http.client import HTTPResponse
from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, JsonResponse
from .models import Animal

# Create your views here.

# define functions that take in requests so they can return http responses


def index(request):
    return HttpResponse("""
    <h1>Livestock</h1>
    <i>Where animals are things</i>
    """)

def cows(request):
    
    data = {
        "cows": Animal.objects.all().filter(species=1)
    }

    return render(request, 'cows.html', data)

def cow(request, id):
    data = {
        'cow': get_object_or_404(Animal, id=id)
    }
    return render(request, 'cow.html', data)

def not_found_404(request, exception):
    return render(request, '404.html')

def list_cows(request):

    data = {
        "cows": [animal.to_dict() for animal in Animal.objects.filter(species=1)],
        "alligators": []
    }
    
    return JsonResponse(data)

def list_cows(request):

    data = {
        "cows": [animal.to_dict() for animal in Animal.objects.filter(species=1)],
        "alligators": []
    }
    
    return JsonResponse(data)