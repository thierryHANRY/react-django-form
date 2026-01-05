from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.auth.base_user import BaseUserManager

# Custom user manager to handle user creation with email as the unique identifier.
class CustomUserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('Email is a required field')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        return self.create_user(email, password, **extra_fields)

# Create your models here.
# This file defines the custom user model for the application.
# It extends the AbstractUser class to include additional fields.
class CustomUser(AbstractUser):
    email = models.EmailField( max_length=200, unique=True)
    birth_date = models.DateField(null=True, blank=True)
    username = models.CharField(max_length=200, null=True, blank=True)

    objects = CustomUserManager()

    USERNAME_FIELD='email'
    REQUIRED_FIELDS = []