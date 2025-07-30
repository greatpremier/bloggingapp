from django.db import models

# Create your models here.
class AppUser(models.Model):
    role = models.CharField(max_length=200)
    user_name = models.CharField(max_length=200)

    def __str__(self):
        return self.user_name + ' ' + self.role
    

class Content(models.Model):
    user = models.ForeignKey(AppUser, on_delete=models.CASCADE)
    drafts = models.CharField(max_length=1000)
    publishes = models.CharField(max_length=1000)

    def __str__(self):
        return self.publishes
    

class Categories(models.Model):
    user = models.ForeignKey(AppUser, on_delete=models.CASCADE)
    publishes = models.CharField(max_length=1000)

    def __str__(self):
        return self.publishes


class Interaction(models.Model):
    user = models.ForeignKey(AppUser, on_delete=models.CASCADE)
    comments = models.CharField(max_length=1000)        
