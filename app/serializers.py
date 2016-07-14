
from rest_framework.serializers import ModelSerializer

from app.models import EggOption

class EggOptionSerializer(ModelSerializer):

    class Meta:
        model = EggOption
