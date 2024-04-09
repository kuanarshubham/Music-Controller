from django.shortcuts import render
from rest_framework.views import APIView
from .serializer import RoomSerializer
from .models import Room
from rest_framework.response import Response
from rest_framework import generics

class RoomView(APIView):
    # queryset = Room.objects.all()
    # serializer_class = RoomSerializer 

    def get(self, request):
        output = [{"id": output.id, "code": output.code, "host": output.host, "guest_can_pause": output.guest_can_pause, 
                   "votes_to_skip": output.votes_to_skip, "created_at": output.created_at}
                   for output in Room.objects.all()]
        return Response(output)

    def post(self, request):
        serializer = RoomSerializer(data = request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)

