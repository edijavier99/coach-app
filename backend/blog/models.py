from django.db import models

# Create your models here.
class Post(models.Model):
    CATEGORY_CHOICES = [
        ('fitness', 'Fitness'),
        ('nutrition', 'Nutrition'),
        ('health', 'Health'),
        ('mindset', 'Mindset'),
    ]

    title = models.CharField(max_length=255)
    slug = models.SlugField(max_length=255, unique=True)  # Ensuring the slug is unique
    subtitle = models.TextField()
    description = models.TextField()
    day_posted = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    image_url = models.URLField(max_length=350, null=True, blank=True)  # Permitir que sea nulo y sin valor por defecto
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES , null=True)
    image_url_tow = models.URLField(max_length=350, null = True, blank = True)
    second_paragraph = models.TextField(null = True, blank = True)

    def __str__(self):
        return self.title
    
    class Meta():
        ordering = ['-day_posted']
        indexes = [
            models.Index(fields=['-day_posted'])
        ]
