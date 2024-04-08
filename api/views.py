from django.shortcuts import render
# from django.http import HttpResponse
from rest_framework import generics
from .serializer import RoomSerializer
from .models import Room

# def main(request):
#     return HttpResponse("what are you talking about")

class RoomView(generics.ListAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer
