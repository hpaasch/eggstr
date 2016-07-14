
from django.conf.urls import url
from django.contrib import admin

from app.views import IndexView, EggOptionListAPIView, OrderCreateAPIView

urlpatterns = [
    url(r'^$', IndexView.as_view(), name="index_view"),
    url(r'^api/egg_options/$', EggOptionListAPIView.as_view(), name="egg_option_list_api_view"),
    url(r'^api/orders/$', OrderCreateAPIView.as_view(), name="order_create_api_view"),
    url(r'^admin/', admin.site.urls),
]
