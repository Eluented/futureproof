from http.client import HTTPResponse
from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

# define functions that take in requests so they can return http responses


def index(request):
    return HttpResponse("""
    <h1>Livestock</h1>
    <i>Where animals are things</i>
    """)

cows = [
    {"name":"Daisy", "age": 3, "id": 1},
    {"name":"Cow", "age": 4, "id": 2},
    {"name":"Lucy", "age": 7, "id": 3}
]

def cows(request):

    return HttpResponse(f"""
    <h1>Cow lost</h1>
    <p>Currently, we have {len(cows)} cows. Moo On!</p>
    """)