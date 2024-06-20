from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.contrib.auth.hashers import check_password

from rest_framework import status
from .models import Article,User, Client
from .serializers import ArticleSerializer, UserSerializer,ClientSerializer
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import AccessToken, RefreshToken


@api_view(['GET'])
def article_list(request):
    category = request.GET.get('category')  # Obtener el parámetro 'category' de la URL
    try:
        if category:
            articles = Article.objects.filter(article_category=category)
        else:
            articles = Article.objects.all()
        
        serializer = ArticleSerializer(articles, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    except Exception as e:
        return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['POST'])
# @permission_classes([IsAuthenticated])
def article_create(request):
    serializer = ArticleSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def single_article(request, id):
    try:
        article = Article.objects.get(id=id)
        serializer = ArticleSerializer(article, many=False)
        return Response(serializer.data, status=status.HTTP_200_OK)
    except Article.DoesNotExist:
        return Response({"error": "Article not found"}, status=status.HTTP_404_NOT_FOUND)
    except Exception as e:
        return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
  
    
@api_view(['DELETE'])  # Especifica que solo se acepta el método DELETE para esta vista
@permission_classes([IsAuthenticated])
def delete_article(request, id):
    try:
        article = Article.objects.get(id=id)
    except Article.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'DELETE':
        article.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def create_user(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        password = request.data.get('user_password') 
        user = serializer.save()  # No incluir commit=False aquí
        if password:
            user.set_password(password)
            user.save()  # Guardar el usuario después de establecer la contraseña
        
        return Response({"message": "Usuario creado correctamente"}, status=status.HTTP_201_CREATED)
    
    # Si el serializer no es válido, devolver los errores de validación
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def create_client(request):
    serializer = ClientSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



@api_view(['POST'])
def login_user(request):
    user_email = request.data.get('user_email')
    password = request.data.get('user_password')

    try:
        user = User.objects.get(user_email=user_email)
    except User.DoesNotExist:
        return Response({'error': 'Credenciales inválidas'}, status=status.HTTP_401_UNAUTHORIZED)

    # Verificar la contraseña
    if not check_password(password, user.user_password):
        return Response({'error': 'Credenciales inválidas'}, status=status.HTTP_401_UNAUTHORIZED)

    # Generar tokens JWT
    refresh = RefreshToken.for_user(user)
    access_token = AccessToken.for_user(user)

    # Serializar el usuario si es necesario
    serializer = UserSerializer(user)

    return Response({
        'access_token': str(access_token),
        'refresh_token': str(refresh),
        'user': serializer.data  # Incluir datos del usuario en la respuesta si es necesario
    }, status=status.HTTP_200_OK)


@api_view(['GET'])
def all_clients(request):
    try:
        client  = Client.objects.all()
        serializer = ClientSerializer(client, many = True)
        return Response(serializer.data, status= status.HTTP_200_OK)
    except Article.DoesNotExist:
        return Response({"error", "Clients not found"}, status=status.HTTP_404_NOT_FOUND)
    except Exception as e:
        return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

