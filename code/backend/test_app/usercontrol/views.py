from django.contrib.auth.hashers import make_password
from rest_framework.views import APIView
from . models import *
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny


# Create your views here.

class UserView(APIView):
    permission_classes = [AllowAny]
    def get(self, request):
        return Response("Hello")
    def post(self, request):
        data = request.data
        data["fullname"] = data["firstname"] + ' ' + data['lastname'] 
        data["password"] = make_password(data["password"])
        del data["confirm"]
        
        return Response("Hello")
