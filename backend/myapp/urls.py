from django.urls import path
from . import views

urlpatterns = [
    path('api/articles/', views.article_list, name='article-list'),
    path('api/articles/create/', views.article_create, name='article-create'),
]