
from rest_framework.serializers import ModelSerializer

from app.models import EggOption, Order


class EggOptionSerializer(ModelSerializer):

    class Meta:
        model = EggOption


class OrderSerializer(ModelSerializer):

    class Meta:
        model = Order
