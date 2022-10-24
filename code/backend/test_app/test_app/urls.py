from django.contrib import admin
from django.urls import path, include
from usercontrol.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('auth/', UserView.as_view(), name="something")
]
