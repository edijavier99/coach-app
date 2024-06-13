from django.db import models

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
