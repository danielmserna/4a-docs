# Generated by Django 3.0 on 2021-11-15 02:09

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Room',
            fields=[
                ('id_room', models.AutoField(primary_key=True, serialize=False, verbose_name='idRoom')),
                ('capacidad', models.IntegerField(verbose_name='Capacidad')),
                ('disponibilidad', models.BooleanField(default=True, verbose_name='Disponibilidad')),
                ('nombre', models.CharField(max_length=25, verbose_name='Nombre')),
                ('precio', models.IntegerField(verbose_name='Precio')),
                ('descripcion', models.CharField(max_length=80, verbose_name='Descripcion')),
                ('hotel', models.CharField(max_length=40, verbose_name='Hotel')),
                ('fecha_ocupacion', models.DateField(verbose_name='FechaOcupacion')),
                ('calificacion', models.IntegerField(verbose_name='Calificacion')),
                ('direccion', models.CharField(max_length=40, verbose_name='Direccion')),
                ('ciudad', models.CharField(max_length=20, verbose_name='Ciudad')),
                ('imagen', models.CharField(max_length=120, verbose_name='Imagen')),
            ],
        ),
    ]
