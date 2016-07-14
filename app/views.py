from django.shortcuts import render
from django.views.generic import TemplateView

from rest_framework.generics import ListAPIView
from app.models import EggOption
from app.serializers import EggOptionSerializer

class IndexView(TemplateView):
    template_name = "index.html"


class EggOptionListAPIView(ListAPIView):
    queryset = EggOption.objects.all()
    serializer_class = EggOptionSerializer
