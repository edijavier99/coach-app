from rest_framework import serializers
from .models import Article, User, Client,WeightGraphic
from django.contrib.auth import authenticate
from django.contrib.auth.hashers import check_password

from rest_framework_simplejwt.tokens import RefreshToken

class ArticleSerializer(serializers.ModelSerializer):
    article_day_posted = serializers.DateField(format='%Y-%m-%d', input_formats=['%Y-%m-%d'])
    class Meta:
        model = Article
        fields = '__all__'

    
class UserSerializer(serializers.ModelSerializer):
    user_password = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ('id', 'email', 'name', 'is_active', 'is_staff', 'user_password')

    def create(self, validated_data):
        password = validated_data.pop('user_password')
        user = super(UserSerializer, self).create(validated_data)
        user.set_password(password)
        user.save()
        return user
    

class UserLoginSerializer(serializers.Serializer):
    user_email = serializers.EmailField()
    user_password = serializers.CharField(write_only=True)

    def validate(self, attrs):
        user_email = attrs.get('user_email')
        user_password = attrs.get('user_password')

        if user_email and user_password:
            user = User.objects.filter(email=user_email).first()

            if not user or not check_password(user_password, user.password):
                raise serializers.ValidationError('Credenciales inválidas')

            refresh = RefreshToken.for_user(user)

            return {
                'user_email': user.email,
                'tokens': {
                    'refresh': str(refresh),
                    'access': str(refresh.access_token),
                }
            }
        else:
            raise serializers.ValidationError('Se requieren tanto email como contraseña')


class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields = '__all__'


class WeightGraphicSerializer(serializers.ModelSerializer):
    client = serializers.StringRelatedField()

    class Meta:
        model = WeightGraphic
        fields = '__all__'
