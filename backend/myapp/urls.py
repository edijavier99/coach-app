from django.urls import path
from . import views
from .views import PlotData  # Importar la clase PlotData desde views.py

urlpatterns = [
    path('api/user/create', views.create_user, name="create-user"),
    path('api/client/create', views.create_client, name="create-client"),
    path('api/login', views.login_user, name="login-user"),
    path('api/clients', views.all_clients, name="all-clients"),
    path('api/verify-client', views.verify_client, name="verify-client"),
    path('api/plot-data/', PlotData.as_view(), name='plot-data'),
    path('api/create-weight-graphic/<int:client_id>/', views.create_weight_graphic, name='create-weight-graphic'),
    path('api/weight_graphic/<int:client_id>/', views.get_weight_graphic, name='get_weight_graphic'),
]