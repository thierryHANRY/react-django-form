from django.shortcuts import render
from rest_framework import viewsets, permissions
from .models import *
from .serializers import *
from rest_framework.response import Response
from django.contrib.auth import get_user_model, authenticate
from knox.models import AuthToken


User = get_user_model()
  

# Create your views here.

class LoginViewset(viewsets.ViewSet):
    permissions_classes = [permissions.AllowAny]
    serializer_class = LoginSerializer

    def create(self, request):
        serializers = self.serializer_class(data=request.data)
        if serializers.is_valid():
            email = serializers.validated_data["email"]
            password = serializers.validated_data["password"]

            user = authenticate(request, email=email, password=password)
 
            if user:
                _, token = AuthToken.objects.create(user)
                return Response(
                    {
                        "user": self.serializer_class(user).data,
                        "token": token
                    }
                )
            else:
                return Response({"error": "invalid credentials"}, status=401)

        else:
            return Response(serializers.errors, status=400)


class RegisterViewset(viewsets.ViewSet):
    permissions_classes = [permissions.AllowAny]
    queryset = User.objects.all()
    serializer_class = RegisterSerializer

    def create(self, request):
        serializers = self.serializer_class(data=request.data)
        if serializers.is_valid():
            serializers.save()
            return Response(serializers.data)
        else:
            return Response(serializers.errors, status=400)