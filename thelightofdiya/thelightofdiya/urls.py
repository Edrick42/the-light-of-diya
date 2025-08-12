from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('blog/', include('blog.urls')),
    path('portfolio/', include('portfolio.urls')),
    path('', views.index, name='index'),  # rota raiz
]
