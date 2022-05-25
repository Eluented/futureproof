from django.urls import path
from . import views

# if someone comes to this path - we will show them views . something !
urlpatterns = [
    path("", views.index, name="livestock-index"),
    path("about/", views.index, name="livestock-about")
]