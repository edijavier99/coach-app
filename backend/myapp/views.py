from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.contrib.auth.hashers import check_password
from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework import status
from .models import Article,User, Client,WeightGraphic
from .serializers import ArticleSerializer, UserSerializer,ClientSerializer,WeightGraphicSerializer
from django.contrib.auth import authenticate
import plotly.express as px
from .serializers import PlotDataSerializer

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
        return Response({'error': 'The user doesn´t exist'}, status=status.HTTP_401_UNAUTHORIZED)

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

@api_view(['POST'])
def verify_client(request):
    client_email = request.data.get("client_email")
    try:
        client = Client.objects.get(client_email=client_email)
        # Si el cliente existe, puedes devolver una respuesta adecuada.
        return Response({'message': 'Client exists', 'client_email': client.client_email}, status=status.HTTP_200_OK)
    except Client.DoesNotExist:
        return Response({'error': 'The entered email does not match any client'}, status=status.HTTP_404_NOT_FOUND)


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



@api_view(['POST'])
def create_weight_graphic(request, client_id):
    serializer = WeightGraphicSerializer(data=request.data)
    if serializer.is_valid():
        client = get_object_or_404(Client, id=client_id)  # Obtener el cliente desde la base de datos
        serializer.save(client=client)  # Asignar el cliente al gráfico de peso
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



@api_view(['GET'])
def get_weight_graphic(request, client_id):
    try:
        # Obtener todos los registros de WeightGraphic para un cliente específico
        weight_graphics = WeightGraphic.objects.filter(client_id=client_id)

        # Serializar los datos
        serializer = WeightGraphicSerializer(weight_graphics, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)

    except WeightGraphic.DoesNotExist:
        return Response({"error": "Weight graphics not found"}, status=status.HTTP_404_NOT_FOUND)

    except Exception as e:
        return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)








class PlotData(APIView):
    def get(self, request):
        df = px.data.iris()
        data = {
            'sepal_width': df['sepal_width'].tolist(),
            'sepal_length': df['sepal_length'].tolist(),
            'species': df['species'].tolist(),
        }
        serializer = PlotDataSerializer(data)
        return Response(serializer.data)
    
