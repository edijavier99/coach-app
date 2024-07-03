from django.contrib import admin
from .models import Article, User, Client,WeightGraphic

# Register your models here.
admin.site.register(Article)
admin.site.register(User)
admin.site.register(Client)
admin.site.register(WeightGraphic)