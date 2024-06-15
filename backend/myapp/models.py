from django.db import models
from django.contrib.auth.hashers import make_password, check_password


# Create your models here.
class Article(models.Model):
    CATEGORY_CHOICES = [
        ('fitness', 'Fitness'),
        ('nutrition', 'Nutrition'),
        ('health', 'Health'),
        ('mindset', 'Mindset'),
    ]

    article_title = models.CharField(max_length=100)
    article_subtitle = models.CharField(max_length=200)
    article_description = models.TextField()
    article_day_posted = models.DateField()
    article_image_url = models.URLField(max_length=300, null=True, blank=True)  # Permitir que sea nulo y sin valor por defecto
    article_category = models.CharField(max_length=20, choices=CATEGORY_CHOICES , null=True)

    def __str__(self):
        return self.article_title

class User(models.Model):
    user_name = models.CharField(max_length=100)
    user_surname = models.CharField(max_length=100)
    user_email = models.EmailField(unique=True)
    user_password = models.CharField(max_length=255, default='')

    def __str__(self):
        return self.user_email

    def set_password(self, raw_password):
        self.user_password = make_password(raw_password)

    def check_password(self, raw_password):
        return check_password(raw_password, self.user_password)
    
class Client(models.Model):
    client_name = models.CharField(max_length=100)
    client_surname = models.CharField(max_length=100)
    client_email = models.EmailField()

    def __str__(self):
        return self.client_email