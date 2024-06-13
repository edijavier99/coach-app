from rest_framework import serializers
from .models import Article

class ArticleSerializer(serializers.ModelSerializer):
    article_day_posted = serializers.DateField(format='%Y-%m-%d', input_formats=['%Y-%m-%d'])
    class Meta:
        model = Article
        fields = '__all__'