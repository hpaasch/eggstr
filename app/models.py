from django.db import models

# Create your models here.

class EggOption(models.Model):
    image_url = models.URLField()
    name = models.CharField(max_length=30)


class Order(models.Model):
    name = models.CharField(max_length=50)
    egg_option = models.ForeignKey(EggOption)
    created = models.DateTimeField(auto_now_add=True)


    class Meta:
        ordering = ("created",)
