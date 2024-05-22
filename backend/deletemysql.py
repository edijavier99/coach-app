import pymysql

# Configuración de la conexión a la base de datos
connection = pymysql.connect(
    host='127.0.0.1',
    user='root',
    password='',  # Si no tienes contraseña, déjala vacía
    database='myapp'  # Nombre de la base de datos que deseas eliminar
)

try:
    # Crear un cursor para ejecutar consultas SQL
    with connection.cursor() as cursor:
        # Ejecutar la consulta para eliminar la base de datos
        cursor.execute('DROP DATABASE myapp')

    # Confirmar los cambios en la base de datos
    connection.commit()
    print("La base de datos 'myapp' ha sido eliminada correctamente.")

except pymysql.Error as e:
    print(f"Error al eliminar la base de datos: {e}")

finally:
    # Cerrar la conexión
    connection.close()
