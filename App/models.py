from django.db import models

# Create your models here.

class User(models.Model):
    username = models.CharField(max_length=30)
    password = models.CharField(max_length=200)


    token = models.CharField(max_length=300)

class Banner(models.Model):
    b_img = models.CharField(max_length=50)

class Hotbanner(models.Model):
    img = models.CharField(max_length=100)
    name = models.CharField(max_length=40)
    function = models.CharField(max_length=40)

class Goods(models.Model):
    g_name = models.CharField(max_length=100)
    g_price = models.CharField(max_length=50)
    g_red = models.CharField(max_length=30)
    g_num = models.CharField(max_length=50)
    g_src = models.CharField(max_length=100)


class Smallimg(models.Model):
    s_img = models.CharField(max_length=100)

class Cart(models.Model):
    # 用户
    user = models.ForeignKey(User)
    # 商品
    goods = models.ForeignKey(Goods)
    # 选择数量
    number = models.IntegerField(default=1)
    # 是否选中
    isselect = models.BooleanField(default=True)


class Order(models.Model):

    user = models.ForeignKey(User)

    number = models.CharField(max_length=300)




    status = models.IntegerField(default=1)

    createtime = models.DateTimeField(auto_now=True)


class OrderGoods(models.Model):

    order = models.ForeignKey(Order)

    goods = models.ForeignKey(Goods)

    number = models.IntegerField(default=1)