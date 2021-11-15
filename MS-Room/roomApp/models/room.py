from django.db import models
from django.db.models.base import Model

class Room(models.Model):
    id_room = models.AutoField('idRoom', primary_key=True)
    capacidad = models.IntegerField('Capacidad')
    disponibilidad = models.BooleanField('Disponibilidad', default=True)
    nombre = models.CharField('Nombre', max_length=25)
    precio = models.IntegerField('Precio')
    descripcion = models.CharField('Descripcion', max_length=80)
    hotel = models.CharField('Hotel', max_length=40)
    fecha_ocupacion = models.DateField('FechaOcupacion')
    calificacion = models.IntegerField('Calificacion')
    direccion = models.CharField('Direccion', max_length=40)
    ciudad = models.CharField('Ciudad', max_length=20)
    imagen = models.CharField('Imagen', max_length=120)

    def get_object(self):
        return Room.objects.get(id_room=request.data.get('id_room'))