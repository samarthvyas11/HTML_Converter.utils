from django.http.response import HttpResponseBase
from django.shortcuts import render
from django.shortcuts import HttpResponse,redirect
from django.contrib import messages
from django.contrib.auth import authenticate,login,logout
from django.contrib.auth.models import User
from .models import Contact
import os
# Create your views here.
def home(request):
    return render(request,"home1.html")

def About(request):
    return render(request,"about.html")

def Contact1(request):
    if request.method == "POST":
        name = request.POST['name']
        email = request.POST['email']
        phone = request.POST['phone']
        content = request.POST['content']
        print(name,email,phone,content)
        if len(name) < 2 or len(email) < 3 or len(phone)< 10 or len(content) < 4:
            messages.error(request,"All Informations are not provided")
        else:    
            contact = Contact(name=name,email=email,phone=phone,content=content)
            contact.save()
            messages.success(request,"Information successfully recorded")
    return render(request,"contact.html")

def Editor(request):
    return render(request,"editor.html")        

def Login(request):
    print("locked in succesfully")   
    if request.method == "POST":
        loginusername = request.POST["loginusername"]
        loginpassword = request.POST["loginpassword"]
        user = authenticate(username=loginusername, password = loginpassword)
        if user is not None:
            login(request,user)
            messages.success(request,"Successfully Logged In")
            return redirect("home")
        else:
            messages.error(request,"Invalid Username or password !!!!! Try again")
            return redirect("home")
            

    return HttpResponse("404-Not found") 


def Sign(request):
      if request.method == "POST":
        username = request.POST["username"]
        email = request.POST["email"]
        fname = request.POST["fname"]
        lname = request.POST["lname"]
        pass1 = request.POST["pass1"]
        pass2 = request.POST["pass2"]

        if not username.isalnum():
            messages.error(request, " User name should only contain letters and numbers")
            return redirect('home')
        if (pass1!= pass2):
             messages.error(request, " Passwords do not match")
             return redirect('home')
        
        # Create the user
        myuser = User.objects.create_user(username,email,pass1)
        myuser.first_name = fname
        myuser.last_name = lname
        myuser.save()
        messages.success(request,"You have successfully created your account")

      else:
        print("404- Not Found")    
      return redirect('home')
def logout_id(request):
    logout(request)
    messages.success(request,"Successfully Logged out") 
    return redirect("home")      


def generate_html(request):
    if request.method == "POST":
        data = request.POST["html_file"]
    f = open('templates/helloworld.html','w')
    f.write(data)
    f.close()
    
    return HttpResponse(str("helloworld.html"))

def download(request):
    return render(request,"helloworld.html")  