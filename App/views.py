import uuid

from django.contrib.auth import logout
from django.http import JsonResponse
from django.shortcuts import render, redirect


# Create your views here.
from App.models import Banner, User

def base(request):
    return render(request,'base.html')

def home(request):
    return render(request,'home.html')


def index(request):
    token = request.session.get('token')
    

    response_data = {}

    if token:
        user = User.objects.get(token=token)
        response_data['name'] = user.username

    return render(request,'index.html',context=response_data)




def register(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')

        user = User()

        user.username = username
        user.password = password
        user.token = str(uuid.uuid5(uuid.uuid4(),'register'))
        user.save()

        request.session['token'] = user.token


        return redirect('wb:index')


    elif request.method == 'GET':
        return render(request, 'register.html')


def login(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')

        try:
            user = User.objects.get(username=username)
            if user.password != password:
                return render(request,'login.html')
            else:
                user.token = str(uuid.uuid5(uuid.uuid4(),'login'))
                user.save()

                request.session['token'] = user.token
                return redirect('wb:index')

        except:
            return render(request,'login.html')
    elif request.method == 'GET':
        return render(request,'login.html')



def quit(request):
    logout(request)
    return redirect('wb:index')


