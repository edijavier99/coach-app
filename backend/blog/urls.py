# blog/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('post_list', views.blog_home, name='blog_home'),
    path('post/create/', views.article_create, name='article-create'),
    path('post/<int:id>',views.single_article, name="single-article" ),
    path('post/delete/<int:id>', views.delete_article, name="delete-article"),
]
