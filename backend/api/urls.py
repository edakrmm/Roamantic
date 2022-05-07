from django.contrib import admin
from django.urls import path
from .views import VoiceTestView

urlpatterns = [
    path('voicetest', VoiceTestView.as_view()),
]