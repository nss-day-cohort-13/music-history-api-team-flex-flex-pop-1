from rest_framework import serializers
from music_history.models import Artist, Album, Songs, LANGUAGE_CHOICES, STYLE_CHOICES


class ArtistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Artist
        fields = ('id', 'name', 'year_began', 'members')

class AlbumSerializer(serializers.ModelSerializer):
    class Meta:
        model = Album
        fields = ('id', 'title', 'genre', 'year_released')

class SongsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Songs
        fields = ('id', 'title', 'length', 'year_released')
