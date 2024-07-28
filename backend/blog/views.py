# blog/views.py
from django.shortcuts import get_object_or_404, render
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.pagination import PageNumberPagination
from .models import Post
from rest_framework import status
from .serializers import PostSerializer
from rest_framework.permissions import IsAuthenticated


@api_view(['GET'])
def blog_home(request):
    category = request.GET.get('category')  # Obtener el parámetro 'category' de la URL
    try:
        if category:
            articles = Post.objects.filter(category=category)
        else:
            articles = Post.objects.all()
        
        serializer = PostSerializer(articles, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    except Exception as e:
        return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['POST'])
# @permission_classes([IsAuthenticated])
def article_create(request):
    print(request.data)
    serializer = PostSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def single_article(request, id):
    try:
        article = Post.objects.get(id=id)
        serializer = PostSerializer(article, many=False)
        return Response(serializer.data, status=status.HTTP_200_OK)
    except Post.DoesNotExist:
        return Response({"error": "Post not found"}, status=status.HTTP_404_NOT_FOUND)
    except Exception as e:
        return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
  
    
@api_view(['DELETE'])  # Especifica que solo se acepta el método DELETE para esta vista
@permission_classes([IsAuthenticated])
def delete_article(request, id):
    try:
        article = Post.objects.get(id=id)
    except Post.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'DELETE':
        article.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    return Response(status=status.HTTP_400_BAD_REQUEST)

