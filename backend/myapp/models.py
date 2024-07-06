from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.utils import timezone


# class User(models.Model):
#     email = models.EmailField(unique=True)
#     first_name = models.CharField(max_length=30, blank=True)
#     last_name = models.CharField(max_length=30, blank=True)
#     date_joined = models.DateTimeField(default=timezone.now)
#     is_active = models.BooleanField(default=True)
#     is_staff = models.BooleanField(default=False)

#     def __str__(self):
#         return self.email
class UserAccountManager(BaseUserManager):
    def create_user(self, email, name, password):
        if not email:
            raise ValueError('User must have an email address')
        if not password:
            raise ValueError('User must have a password')
        
        email = self.normalize_email(email)
        user = self.model(email=email, name=name)
        user.set_password(password)
        user.save(using=self._db)
        
        return user
    
    def create_superuser(self, email, name, password):
        user = self.create_user(email, name, password=password)
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)

        return user

class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=255, unique=True)
    name = models.CharField(max_length=255)  # Valor predeterminado temporal
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = UserAccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name']

    def __str__(self):
        return self.email
    
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

