from rest_framework import serializers
from music_history.models import Artist, Album, Songs


class ArtistSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Artist
        fields = ('id', 'url', 'name', 'year_began', 'members')

class AlbumSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Album
        fields = ('id', 'url', 'title', 'genre', 'year_released', 'artist')

class SongSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Songs
        fields = ('id', 'url', 'title', 'length', 'album')
