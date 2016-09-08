from django.conf.urls import url, include
from music_history import views

urlpatterns = [
    url(r'^artists/$', views.artist_list),
    url(r'^artists/(?P<pk>[0-9]+)/$', views.artist_detail),
    url(r'^albums/$', views.album_list),
    url(r'^albums/(?P<pk>[0-9]+)/$', views.album_detail),
    url(r'^songs/$', views.songs_list),
    url(r'^songs/(?P<pk>[0-9]+)/$', views.songs_detail),
]
