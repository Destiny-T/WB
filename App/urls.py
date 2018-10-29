from django.conf.urls import url

from App import views

urlpatterns = [
    url(r'^base/$',views.base,name='base'),
    url(r'^home/$',views.home,name='home'),
    url(r'^index/$',views.index,name='index'),
    url(r'^register/$',views.register,name='register'),
    url(r'^login/$',views.login,name='login'),
    url(r'^quit/$',views.quit,name='quit'),
]