from ctypes import get_errno
from django.conf    import settings
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.backends import TokenBackend
from roomApp.models.room import Room
from roomApp.serializers.roomSerializer import roomSerializer

class roomDetailView(generics.ListAPIView):
    queryset =  Room.objects.all()
    serializer_class = roomSerializer

    def get(self, request, *args, **kwargs):
        return super().get(request,*args, **kwargs)

class roomCreateView(generics.CreateAPIView):
    serializer_class = roomSerializer
    permission_class = (IsAuthenticated)

    def post(self, request, *args, **kwargs):
        # token = request.META.get('HTTP_AUTHORIZATION', " ").split(' ')[1]
        # valid_data = TokenBackend(algorithm='HS256').decode(token,verify=False)

        serializer = roomSerializer(data=request.data)
        serializer.is_valid(raise_exception = True)
        serializer.save()

        return Response("Transacción exitosa", status = status.HTTP_201_CREATED)

class roomUpdateView(generics.UpdateAPIView): #ACTUALIZAR
    serializer_class = roomSerializer
    permission_class = (IsAuthenticated)
    queryset =  Room.objects.all()

    def update(self, request, *args, **kwargs):
        # token = request.META.get('HTTP_AUTHORIZATION', " ").split(' ')[1]
        # valid_data = TokenBackend(algorithm='HS256').decode(token,verify=False)

        pk = request.data.get('id_room')
        if (kwargs.get('pk') is not None):
            kwargs['pk'] = request.data.get('id_room')
        self.kwargs['pk'] = request.data.get('id_room')
        return super().update(request, *args, *kwargs)

class roomDeleteView(generics.DestroyAPIView): #ELIMINAR
    serializer_class = roomSerializer
    permission_class = (IsAuthenticated)
    queryset =  Room.objects.all()

    def delete(self, request, *args, **kwargs):
        # token = request.META.get('HTTP_AUTHORIZATION', " ").split(' ')[1]
        # valid_data = TokenBackend(algorithm='HS256').decode(token,verify=False)

        pk = request.data.get('id_room')
        if (kwargs.get('pk') is not None):
            kwargs['pk'] = request.data.get('id_room')
        self.kwargs['pk'] = request.data.get('id_room')
        return super().delete(request, *args, **kwargs)
