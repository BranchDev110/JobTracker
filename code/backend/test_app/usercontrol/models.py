from django.db import models

# Create your models here.
class User(models.Model):
    firstname = models.CharField(max_length=80)
    lastname = models.CharField(max_length=80)
    fullname = models.CharField(max_length=80)
    email = models.CharField(max_length=80)
    password = models.CharField(max_length=80)