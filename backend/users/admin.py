from django.contrib import admin
from .models import *

# Register your models here.
#This file registers the CustomUser model with the Django admin site.
admin.site.register(CustomUser)
