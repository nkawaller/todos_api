from django.shortcuts import render
from api.models import Note
from api.serializers import NoteSerializer
from rest_framework import generics

# Create your views here.

class NoteList(generics.ListCreateAPIView):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer

class NoteDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer
