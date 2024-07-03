from django.db import models
from django.contrib.auth.hashers import make_password, check_password
from django.utils import timezone


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
    client_email = models.EmailField(unique=True)

    def __str__(self):
        return self.client_email
    

# PARENT CLASS FOR RECORDS

class Graphic(models.Model):
    client = models.ForeignKey(Client, on_delete=models.CASCADE, related_name='graphics')
    created_day = models.DateTimeField(auto_now_add=True)

    class Meta:
        abstract = True

    def __str__(self):
        return f"{self.client.client_name} {self.client.client_surname} - {self.created_day}"


class WeightGraphic(Graphic):
    value = models.FloatField()
    unit = models.CharField(max_length=10, default='kg')

    def save(self, *args, **kwargs):
        # Validar que el valor de peso sea mayor o igual a 40 kg
        if self.value < 40:
            raise ValueError("Weight must be 40 kg or more.")

        super().save(*args, **kwargs)

    def __str__(self):
        return f"Weight - {super().__str__()} {self.value} {self.unit}"
