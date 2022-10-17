from unittest.util import _MAX_LENGTH
from django.db import models

# Create your models here.

class Company(models.Model):
    name = models.CharField(max_length=80)
    service = models.CharField(max_length=80)
    link = models.CharField(max_length=80)
    employes_start = models.IntegerField()
    employes_start = models.IntegerField()

class Contracts(models.Model):
    name = models.CharField(max_length=80)
    phone = models.CharField(max_length=80)
    link = models.CharField(max_length=80)
    company_id = models.ForeignKey(Company, default="", on_delete=models.CASCADE)

class JobList(models.Model):
    title = models.CharField(max_length=80)
    salary_min = models.IntegerField()
    salary_max = models.IntegerField()
    type = models.IntegerField()
    worktype = models.IntegerField()
    jd = models.TextField()
    prefer_status = models.IntegerField()
    applicants = models.IntegerField()
    company_id = models.ForeignKey(Company, default="", on_delete=models.CASCADE)

class User(models.Model):
    name = models.CharField(max_length=80)
    email = models.CharField(max_length=80)
    password = models.CharField(max_length=80)

class Notes(models.Model):
    content = models.CharField(max_length=80)
    job_id = models.ForeignKey(JobList, default="", on_delete=models.CASCADE)

class JobState(models.Model):
    job_id = models.ForeignKey(JobList, default="", on_delete=models.CASCADE)
    user_id = models.ForeignKey(User, default="", on_delete=models.CASCADE)
    status = models.IntegerField()
    date = models.DateField()