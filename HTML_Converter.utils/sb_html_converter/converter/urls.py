"""sb_html_converter URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from os import name
from django.contrib import admin
from django.urls import path,include
from . import views

urlpatterns = [
    path('',views.home,name="home"),
    path('About',views.About,name='About'),
    path('Contact',views.Contact1,name='Contact'),
    path('Editor',views.Editor,name='Editor'),
    path('login',views.Login,name='Login'),
    path('signup',views.Sign,name='Signup'),
    path('logout',views.logout_id,name="logout"),
    path('generate_file',views.generate_html,name="generate"),
    path('download',views.download,name="download")
]
