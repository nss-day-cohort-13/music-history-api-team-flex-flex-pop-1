from django.db import models
# from django.db.models.fields.DurationField import DurationField
# from pygments.lexers import get_all_lexers
# from pygments.styles import get_all_styles

# LEXERS = [item for item in get_all_lexers() if item[1]]
# LANGUAGE_CHOICES = sorted([(item[1][0], item[0]) for item in LEXERS])
# STYLE_CHOICES = sorted((item, item) for item in get_all_styles())


class Artist(models.Model):
    name = models.CharField(max_length=100)
    year_began = models.IntegerField()
    members = models.TextField(max_length=None, blank=True, default='')

    def __str__(self):
        return self.name

    class Meta:
        ordering = ('name',)

class Album(models.Model):
    title = models.CharField(max_length=100, blank=True, default='')
    genre = models.CharField(max_length=100, blank=True, default='')
    year_released = models.DateField()
    artist = models.ForeignKey(Artist, related_name='artist')

    def __str__(self):
        return self.title

    class Meta:
        ordering = ('title',)

class Songs(models.Model):
    title = models.CharField(max_length=100)
    length = models.DurationField()
    album = models.ForeignKey(Album, related_name='album')

    def __str__(self):
        return self.title

    class Meta:
        ordering = ('title',)
