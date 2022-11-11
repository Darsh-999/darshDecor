from django.shortcuts import render, redirect, HttpResponseRedirect, get_object_or_404
from .forms import *
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User, Permission
from django.contrib.auth.decorators import login_required
from .models import *
from json import dumps
from django.http import JsonResponse
import ast
from django.core import serializers

# user Login page function


def Userlogin(request):
    redirect_to = request.GET.get('next')
    if redirect_to == None:
        redirect_to = "/myapp/home"
    if request.method == 'POST':
        loginForm = UserLoginForm(request.POST or None)
        if loginForm.is_valid():
            username = loginForm.cleaned_data.get('username')
            password = loginForm.cleaned_data.get('password')
            user = authenticate(username=username, password=password)
            if user.is_active:
                login(request, user)
                return redirect(redirect_to)
    else:
        loginForm = UserLoginForm()
    return render(request, 'login.html', {'loginForm': loginForm})

# user Signup page function


def signupform(request):
    if request.method == 'POST':
        UserRegister = SignupUser(request.POST or None)
        if UserRegister.is_valid():

            UserRegister.save()
            username = UserRegister.cleaned_data.get('username')
            password = UserRegister.cleaned_data.get('password')
            user = authenticate(username=username, password=password)
            return HttpResponseRedirect("/myapp/login")
    else:
        UserRegister = SignupUser()
    return render(request, 'signup.html', {'UserRegister': UserRegister})


@login_required
def UserLogout(request):
    logout(request)
    return redirect('/myapp/login')


@login_required
def userprofile(request, pk=None):
    if pk:
        user = User.objects.get(pk=pk)
    else:
        user = request.user
    print(user)
    return render(request, 'userprofile.html', {'user': user})


def Homepage(request):
    return render(request, 'home.html')


def Aboutpage(request):
    return render(request, 'about.html')


def Servicepage(request):
    return render(request, 'services.html')


@login_required
def Projectpage(request):
    room_cat = list(RoomCategory.objects.values())
    room = list(Room.objects.values())

    return render(request, 'projects.html', {"room_cat": room_cat, "room": room})


def Contactpage(request):
    return render(request, 'contact.html')


def Teampage(request):
    return render(request, 'team.html')


def Faqpage(request):
    return render(request, 'faq.html')

# sending 3D models to javascripts
# def sendmodels(request):
# 	val = Room.objects.values()
# 	newval = []

# 	for i in val:
# 		newval.append(i['upload'])

# 	response = {
#         'is_taken': newval[0]
#     }
# 	return JsonResponse(response, status=200)


# @login_required
# def rendermodel(request):
# 	# val = list(Room.objects.values())
# 	# model_path = request.GET.get('path','').split("/")[-1]
# 	# newval = []
# 	# for i in val:
# 	# 	newval.append(i['upload'])
# 	return render(request,'render.html')

@login_required
def rendermodel(request):
    if request.method == 'POST':
        room_type = RoomType(first_name="Kitchen")
        room_type.save()

        if 'floor' in request.POST:
            floor_form = FloorUploadForm(request.POST, request.FILES)
            if floor_form.is_valid():
                # img_object = floor_form.cleaned_data['texture_Floor']
                for img_object in request.FILES.getlist('texture_Floor'):
                    val = Floor(texture_Floor=img_object, roomtype=room_type)
                    val.save()
                # return HttpResponseRedirect('/render.html')

        elif 'back_splash' in request.POST:
            backsplash = BackSplashForm(request.POST, request.FILES)
            if backsplash.is_valid():
                # img_object = backsplash.cleaned_data['back_splash']
                # val = Backsplash(back_splash=img_object,roomtype=room_type)
                # val.save()
                # return HttpResponseRedirect("/project")

                for img_object in request.FILES.getlist('back_splash'):
                    val = Backsplash(back_splash=img_object,
                                     roomtype=room_type)
                    val.save()

        elif 'cabinet' in request.POST:
            cab = CabinetForm(request.POST, request.FILES)
            if cab.is_valid():
                img_object = cab.data['cabinet']
                val = Cabinet(cabinet=img_object, roomtype=room_type)
                val.save()
        
        elif 'cabinethandle' in request.POST:
            cabhandle = CabinetHandleForm(request.POST, request.FILES)
            if cabhandle.is_valid():
                img_object = cabhandle.data['cabinethandle']
                val = CabinetHandle(cabinethandle=img_object, roomtype=room_type)
                val.save()
        
        elif 'sinkfaucet' in request.POST:
            sinkfau = SinkFaucetForm(request.POST, request.FILES)
            if sinkfau.is_valid():
                img_object = sinkfau.data['sinkfaucet']
                val = SinkFaucet(sinkfaucet=img_object, roomtype=room_type)
                val.save()
        
        elif 'walls' in request.POST:
            walls = WallsForm(request.POST, request.FILES)
            if walls.is_valid():
                img_object = walls.data['walls']
                val = Walls(walls=img_object, roomtype=room_type)
                val.save()
    else:
        floor_form = FloorUploadForm()
        backsplash_form = BackSplashForm()
        cabinet_form = CabinetForm()
        cabinetHandle_form = CabinetForm()
        sinkfaucet_form = SinkFaucetForm()
        walls_form = SinkFaucetForm()
  
        floor_show = Floor.objects.all().order_by("-id")
        bcsplash_show = Backsplash.objects.all().order_by("-id")
        cabinet_show = Cabinet.objects.all().order_by("-id")
        cabinethandle_show = CabinetHandle.objects.all().order_by("-id")
        sinkfaucet_show = SinkFaucet.objects.all().order_by("-id")
        walls_show = Walls.objects.all().order_by("-id")

        return render(request, 'render.html', {"floor_textures": floor_show, 
                                               "bcsplash": bcsplash_show, 
                                               "cabinet_textures": cabinet_show, 
                                               "cabinetHandle_textures":cabinethandle_show, 
                                               "sinkFaucet_textures":sinkfaucet_show, 
                                               "walls_textures":walls_show
                                               })
