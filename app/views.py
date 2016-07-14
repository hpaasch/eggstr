from django.shortcuts import render
from django.views.generic import TemplateView

from rest_framework.generics import ListAPIView, ListCreateAPIView
from app.models import EggOption, Order
from app.serializers import EggOptionSerializer, OrderSerializer

class IndexView(TemplateView):
    template_name = "index.html"


class EggOptionListAPIView(ListAPIView):
    queryset = EggOption.objects.all()
    serializer_class = EggOptionSerializer


class OrderCreateAPIView(ListCreateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
