from django.urls import path
from . import views

# if someone comes to this path - we will show them views . something !
urlpatterns = [
    path("", views.index, name="livestock-index"),
    path("about/", views.index, name="livestock-about"),
    path("cows/", views.cows, name="livestock-cows"),
    path("cows/<int:id>", views.cow, name="livestock-cows"),
    path("api/cows", views.list_cows, name="livestock-api-cows")
]

handler404 = 'livestock.views.not_found_404'