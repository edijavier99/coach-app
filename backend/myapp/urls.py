from django.urls import path
from . import views

urlpatterns = [
    path('api/articles/', views.article_list, name='article-list'),
    path('api/articles/create/', views.article_create, name='article-create'),
    path('api/article/<int:id>',views.single_article, name="single-article" ),
    path('api/article/delete/<int:id>', views.delete_article, name="delete-article"),
    path('api/user/create', views.create_user, name="create-user")
]