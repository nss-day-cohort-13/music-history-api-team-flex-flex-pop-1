from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.reverse import reverse
from music_history.serializers import ArtistSerializer, AlbumSerializer, SongSerializer
from music_history.models import *

@api_view(['GET'])
def api_root(request, format=None):
    return Response({
        "artists": reverse("artist-list", request=request, format=format),
        "albums": reverse("album-list", request=request, format=format),
        "songs": reverse("songs-list", request=request, format=format)
    })

class ArtistView(viewsets.ModelViewSet):
    queryset = Artist.objects.all()
    serializer_class = ArtistSerializer

# class ArtistDetail(viewsets.ModelViewSet):
#     queryset = Artist.objects.all()
#     serializer_class = ArtistSerializer
#     lookup_field = 'name'

class AlbumView(viewsets.ModelViewSet):
    queryset = Album.objects.all()
    serializer_class = AlbumSerializer

# class AlbumDetail(viewsets.ModelViewSet):
#     queryset = Album.objects.all()
#     serializer_class = AlbumSerializer
#     lookup_field = 'title'

class SongView(viewsets.ModelViewSet):
    queryset = Songs.objects.all()
    serializer_class = SongSerializer

# class SongDetail(viewsets.ModelViewSet):
#     queryset = Songs.objects.all()
#     serializer_class = SongSerializer
#     lookup_field = 'title'

# @api_view(['GET', 'POST'])
# def artist_list(request, format=None):
#     """
#     List all artists, or create a new artist.
#     """
#     if request.method == 'GET':
#         artist = Artist.objects.all()
#         serializer = ArtistSerializer(artist, many=True)
#         return Response(serializer.data)
#     elif request.method == 'POST':
#         serializer = ArtistSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# @api_view(['GET', 'PUT', 'DELETE'])
# def artist_detail(request, pk, format=None):
#     """
#     Retrieve, update or delete a artist instance.
#     """
#     try:
#         artist = Artist.objects.get(pk=pk)
#     except Artist.DoesNotExist:
#         return Response(status=status.HTTP_404_NOT_FOUND)
#
#     if request.method == 'GET':
#         serializer = ArtistSerializer(artist)
#         return Response(serializer.data)
#
#     elif request.method == 'PUT':
#         serializer = ArtistSerializer(artist, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#
#     elif request.method == 'DELETE':
#         artist.delete()
#         return Response(status=status.HTTP_204_NO_CONTENT)

# @api_view(['GET', 'POST'])
# def album_list(request, format=None):
#     """
#     List all albums, or create a new album.
#     """
#     if request.method == 'GET':
#         album = Album.objects.all()
#         serializer = AlbumSerializer(album, many=True)
#         return Response(serializer.data)
#     elif request.method == 'POST':
#         serializer = AlbumSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#
# @api_view(['GET', 'PUT', 'DELETE'])
# def album_detail(request, pk, format=None):
#     """
#     Retrieve, update or delete a album instance.
#     """
#     try:
#         album = Album.objects.get(pk=pk)
#     except Album.DoesNotExist:
#         return Response(status=status.HTTP_404_NOT_FOUND)
#
#     if request.method == 'GET':
#         serializer = AlbumSerializer(album)
#         return Response(serializer.data)
#
#     elif request.method == 'PUT':
#         serializer = AlbumSerializer(album, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#
#     elif request.method == 'DELETE':
#         album.delete()
#         return Response(status=status.HTTP_204_NO_CONTENT)
#
# @api_view(['GET', 'POST'])
# def songs_list(request, format=None):
#     """
#     List all songs, or create a new song.
#     """
#     if request.method == 'GET':
#         songs = Songs.objects.all()
#         serializer = SongsSerializer(songs, many=True)
#         return Response(serializer.data)
#     elif request.method == 'POST':
#         serializer = SongsSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#
# @api_view(['GET', 'PUT', 'DELETE'])
# def songs_detail(request, pk, format=None):
#     """
#     Retrieve, update or delete a song instance.
#     """
#     try:
#         songs = Songs.objects.get(pk=pk)
#     except Songs.DoesNotExist:
#         return Response(status=status.HTTP_404_NOT_FOUND)
#
#     if request.method == 'GET':
#         serializer = SongsSerializer(songs)
#         return Response(serializer.data)
#
#     elif request.method == 'PUT':
#         serializer = SongsSerializer(songs, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#
#     elif request.method == 'DELETE':
#         songs.delete()
#         return Response(status=status.HTTP_204_NO_CONTENT)
