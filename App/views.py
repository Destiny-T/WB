import hashlib
import uuid

from django.contrib.auth import logout
from django.http import JsonResponse
from django.shortcuts import render, redirect


# Create your views here.
from App.models import User, Banner, Goods, Hotbanner, Smallimg, Cart


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






# 商品详情
def cart(request,ge):
    token = request.session.get('token')
    good = Goods.objects.all()[int(ge)]
    smallimg = Smallimg.objects.all()
    response_data = {
        'good': good,
        'smallimg':smallimg,

    }

    if token:
        user = User.objects.get(token=token)
        response_data['name'] = user.username


    return render(request, 'addShopCart.html', context=response_data)



def addtocart(request):
    token = request.session.get('token')
    goodsid = request.GET.get('goodsid')




    response_data = {
        'msg': '',
        'status': '',

    }
    if token:
        user = User.objects.get(token=token)
        goods = Goods.objects.get(pk=goodsid)
        print(goods)

        carts = Cart.objects.filter(goods=goods).filter(user=user)
        if carts.exists():
            cart = carts.first()
            cart.number = cart.number + 1
            cart.save()
            response_data['msg'] = '添加购物车成功'
            response_data['status'] = 1
            response_data['number'] = cart.number
            return JsonResponse(response_data)
        else:
            cart = Cart()
            cart.user = user
            cart.goods = goods
            cart.number = 1
            cart.save()

            response_data['mag'] = '添加购物车成功'
            response_data['status'] = 1
            response_data['number'] = cart.number
            return JsonResponse(response_data)
    else:
        response_data['msg'] = '你还未登录，请登陆'
        response_data['status'] = '-1'
        return JsonResponse(response_data)

def clearcart(request):
    token = request.session.get('token')

    carts = []
    response_data = {}
    if token:

        user = User.objects.get(token=token)
        response_data['name'] = user.username


        carts = Cart.objects.filter(user=user).exclude(number=0)
        response_data['carts'] = carts


    return render(request, 'clearShopCart.html', context=response_data)


def subtocart(request):
    token = request.session.get('token')
    user = User.objects.get(token=token)
    goodsid = request.GET.get('goodsid')
    goods = Goods.objects.get(pk=goodsid)


    carts = Cart.objects.filter(user=user).filter(goods=goods)
    cart = carts.first()
    cart.number = cart.number - 1
    cart.save()

    response_data = {
        'msg':'删减成功',
        'status':'1',
        'number':cart.number
    }
    return JsonResponse(response_data)


def changecartstatus(request):
    cartid = request.GET.get('cartid')
    cart = Cart.objects.get(pk=cartid)
    cart.isselect = not cart.isselect
    cart.save()


    response_data = {
        'msg':'修改状态成功',
        'status':'1',
        'isselect':cart.isselect,
    }
    return JsonResponse(response_data)