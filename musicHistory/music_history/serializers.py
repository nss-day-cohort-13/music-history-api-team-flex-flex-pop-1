from rest_framework import serializers
from music_history.models import Artist, Album, Songs


class ArtistSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Artist
        fields = ('id', 'name', 'year_began', 'members')

class AlbumSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Album
        fields = ('id', 'title', 'genre', 'year_released')

class SongSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Songs
        fields = ('id', 'title', 'length', 'year_released')
