from django.conf.urls import url

from App import views

urlpatterns = [
    url(r'^index/$',views.index,name='index'),
    url(r'^register/$',views.register,name='register'),
    url(r'^login/$',views.login,name='login'),
    url(r'^quit/$',views.quit,name='quit'),
    url(r'^cart/(\d+)/$',views.cart,name='cart'),
    url(r'^goods/$',views.goods,name='goods'),
    url(r'^addtocart/$',views.addtocart,name='addtocart'),
    url(r'^subtocart/$',views.subtocart,name='addtocart'),
    url(r'^clearcart/$',views.clearcart,name='clearcart'),
    url(r'^changecartstatus/$',views.changecartstatus,name='changecartstatus')
]