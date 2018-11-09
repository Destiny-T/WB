from django.conf.urls import url

from App import views

urlpatterns = [
    url(r'^index/$',views.index,name='index'), # 首页
    url(r'^register/$',views.register,name='register'), # 注册
    url(r'^login/$',views.login,name='login'), # 登录
    url(r'^quit/$',views.quit,name='quit'), # 退出
    url(r'^cart/(\d+)/$',views.cart,name='cart'), # 购物车
    url(r'^goods/$',views.goods,name='goods'), # 商品列表
    url(r'^addtocart/$',views.addtocart,name='addtocart'), # 添加购物车
    url(r'^cartsadd/$',views.cartsadd,name='cartsadd'), # 购物车加操作
    url(r'^subtocart/$',views.subtocart,name='addtocart'), # 减操作
    url(r'^clearcart/$',views.clearcart,name='clearcart'), # 清空购物车
    url(r'^changecartstatus/$',views.changecartstatus,name='changecartstatus'), # 单选
    url(r'^changecartselect/$',views.changecartselect,name='changecartselect'), # 全选

    url(r'^generateorder/$',views.generateorder,name='generateorder'), # 生成订单
    url(r'^orderinfo/$',views.orderinfo,name='orderinfo'), # 订单信息
    url(r'^changeorderstatus/$',views.changeorderstatus,name='changeorderstatus'),# 订单状态

]