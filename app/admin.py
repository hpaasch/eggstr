from django.contrib import admin

from app.models import Order, EggOption


admin.site.register([Order, EggOption])
