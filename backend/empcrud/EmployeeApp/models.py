from django.db import models

# Create your models here.
class employee(models.Model):
    name = models.CharField(max_length=150, null=False,blank=False)
    email = models.CharField(max_length=150, null=False,blank=False)
    phone = models.CharField(max_length=150, null=False,blank=False)
    linkedin = models.CharField(max_length=150, null=False,blank=False)
    github = models.CharField(max_length=150, null=False,blank=False)
    resume = models.FileField(upload_to='uploads/file',null=False,blank=False)

    def __str__(self):
        return self.name