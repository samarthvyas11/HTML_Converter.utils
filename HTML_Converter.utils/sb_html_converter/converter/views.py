from django.http.response import HttpResponseBase
from django.shortcuts import render
from django.shortcuts import HttpResponse,redirect
from django.contrib import messages
from django.contrib.auth import authenticate,login,logout
from django.contrib.auth.models import User
from .models import Contact
from django.core.mail import send_mail, BadHeaderError
from django.http import HttpResponse
from django.contrib.auth.forms import PasswordResetForm
from django.template.loader import render_to_string
from django.db.models.query_utils import Q
from django.utils.http import urlsafe_base64_encode
from django.contrib.auth.tokens import default_token_generator
from django.utils.encoding import force_bytes
from django.contrib.auth import get_user_model
import os

# Create your views here.
def home(request):
    return render(request,"home.html")

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
        try:
        
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
        except:
            messages.error(request, "User Name already exist")
            return redirect('home')


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
    print(request.user.username)    
    print("hello this is samarth vyas")
    f = open('templates/'+str(request.user.username)+'.html','w')
    f.write(data)
    f.close()
    
    return HttpResponse(str("helloworld.html"))

def download(request):
    return render(request,str(request.user.username)+".html")  




def password_reset_request(request):
	if request.method == "POST":
		password_reset_form = PasswordResetForm(request.POST)
		if password_reset_form.is_valid():
			data = password_reset_form.cleaned_data['email']
			associated_users = User.objects.filter(Q(email=data))
			if associated_users.exists():
				for user in associated_users:
					subject = "Password Reset Requested"
					email_template_name = "main/password_reset_email.txt"
					c = {
					"email":user.email,
					'domain':'htmlconverterutilsapp.herokuapp.com',
					'site_name': 'HTML Converter.utils',
					"uid": urlsafe_base64_encode(force_bytes(user.pk)),
					"user": user,
					'token': default_token_generator.make_token(user),
					'protocol': 'https',
					}
					email = render_to_string(email_template_name, c)
					try:
						send_mail(subject, email, 'svsamarth1123@gmail.com' , [user.email], fail_silently=False)
					except BadHeaderError:
						return HttpResponse('Invalid header found.')
					return redirect ("/password_reset/done/")
	password_reset_form = PasswordResetForm()
	return render(request=request, template_name="main/password_reset.html", context={"password_reset_form":password_reset_form})    