import hashlib
import uuid

from django.contrib.auth import logout
from django.http import JsonResponse
from django.shortcuts import render, redirect


# Create your views here.
from App.models import User, Banner, Goods, Hotbanner, Smallimg


# 首页
def index(request):
    token = request.session.get('token')
    b_imgs = Banner.objects.all()
    h_imgs = Hotbanner.objects.all()

    

    response_data = {
        'b_imgs':b_imgs,
        'h_imgs':h_imgs,
    }

    if token:
        user = User.objects.get(token=token)
        response_data['name'] = user.username

    return render(request,'index.html',context=response_data)



# 注册
def register(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = generate_password(request.POST.get('password'))

        user = User()

        user.username = username
        user.password = password
        # 生成token
        user.token = str(uuid.uuid5(uuid.uuid4(),'register'))
        # 保存到数据库
        user.save()

        request.session['token'] = user.token


        return redirect('wb:index')


    elif request.method == 'GET':
        return render(request, 'register.html')

# 登录
def login(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')

        try:
            user = User.objects.get(username=username)
            if user.password != generate_password(password):
                return render(request,'login.html')
            else:
                # 更新token
                user.token = str(uuid.uuid5(uuid.uuid4(),'login'))
                user.save()

                request.session['token'] = user.token
                return redirect('wb:index')

        except:
            return render(request,'login.html')
    elif request.method == 'GET':
        return render(request,'login.html')

# 加密
def generate_password(password):
    sha = hashlib.sha512()
    sha.update(password.encode('utf-8'))
    return sha.hexdigest()

# 退出登录
def quit(request):
    logout(request)
    return redirect('wb:index')

# 商品详情
def cart(request,ge):
    token = request.session.get('token')
    good = Goods.objects.all()[int(ge)-1]
    smallimg = Smallimg.objects.all()
    response_data = {
        'good': good,
        'smallimg':smallimg,
    }

    if token:
        user = User.objects.get(token=token)
        response_data['name'] = user.username

    return render(request, 'addShopCart.html', context=response_data)

# 商品列表
def goods(request):
    token = request.session.get('token')
    goodsList = Goods.objects.all()


    response_data = {
        'goodsList':goodsList,

    }

    if token:
        user = User.objects.get(token=token)
        response_data['name'] = user.username

    return render(request, 'goodsList.html', context=response_data)


def clearcart(request,good):
    good = Goods.objects.all()[int(good) - 1]

    response_data = {
        'good':good,
    }

    return render(request,'clearShopCart.html',context=response_data)