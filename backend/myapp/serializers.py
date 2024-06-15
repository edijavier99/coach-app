from rest_framework import serializers
from .models import Article, User

class ArticleSerializer(serializers.ModelSerializer):
    article_day_posted = serializers.DateField(format='%Y-%m-%d', input_formats=['%Y-%m-%d'])
    class Meta:
        model = Article
        fields = '__all__'
    
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'