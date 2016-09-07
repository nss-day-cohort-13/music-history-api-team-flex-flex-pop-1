from django.conf.urls import url
from music_history import views

urlpatterns = [
    url(r'^music_history/$', views.artist_list),
    url(r'^music_history/(?P<pk>[0-9]+)/$', views.artist_detail),
]
