from rest_framework import serializers
from .models import Article, User, Client,WeightGraphic

class ArticleSerializer(serializers.ModelSerializer):
    article_day_posted = serializers.DateField(format='%Y-%m-%d', input_formats=['%Y-%m-%d'])
    class Meta:
        model = Article
        fields = '__all__'
    
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'user_name', 'user_email')

class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields = '__all__'

class PlotDataSerializer(serializers.Serializer):
    sepal_width = serializers.ListField(child=serializers.FloatField())
    sepal_length = serializers.ListField(child=serializers.FloatField())
    species = serializers.ListField(child=serializers.CharField())

class WeightGraphicSerializer(serializers.ModelSerializer):
    client = serializers.StringRelatedField()

    class Meta:
        model = WeightGraphic
        fields = '__all__'