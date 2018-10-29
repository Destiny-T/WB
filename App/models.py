from django.db import models

# Create your models here.

class User(models.Model):
    username = models.CharField(max_length=30)
    password = models.CharField(max_length=200)


    token = models.CharField(max_length=300)

class Banner(models.Model):
    b_img = models.CharField(max_length=50)