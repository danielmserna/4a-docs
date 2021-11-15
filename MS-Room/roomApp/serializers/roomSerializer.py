from roomApp.models.room import Room
from rest_framework import serializers

class roomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = ['id_room', 'capacidad','disponibilidad', 'nombre', 'precio', 'descripcion', 'hotel', 
        'fecha_ocupacion', 'calificacion', 'direccion', 'ciudad', 'imagen']

        def to_representation(self, obj):
             Room = Room.objects.get(id=obj).Room

             return {
                 'idRoom': Room.id_room,
                 'Capacidad': Room.capacidad,
                 'Disponibilidad': Room.disponibilidad,
                 'Nombre': Room.nombre,
                 'Precio' : Room.precio,
                 'Descripcion': Room.descripcion,
                 'Hotel' : Room.hotel,
                 'FechaOcupacion' : Room.fecha_ocupacion,
                 'Calificacion' : Room.calificacion,
                 'Direccion': Room.direccion,
                 'Ciudad': Room.ciudad,
                 'Imagen': Room.imagen,
                 
             }

