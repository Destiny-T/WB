from django.conf.urls import url

from App import views

urlpatterns = [
    url(r'^index/$',views.index,name='index'),
    url(r'^register/$',views.register,name='register'),
    url(r'^login/$',views.login,name='login'),
    url(r'^quit/$',views.quit,name='quit'),
    url(r'^cart/$',views.cart,name='cart'),
    url(r'^goods/(\d+)$',views.goods,name='goods'),
]