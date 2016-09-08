from django.db import models
# from pygments.lexers import get_all_lexers
# from pygments.styles import get_all_styles

# LEXERS = [item for item in get_all_lexers() if item[1]]
# LANGUAGE_CHOICES = sorted([(item[1][0], item[0]) for item in LEXERS])
# STYLE_CHOICES = sorted((item, item) for item in get_all_styles())


class Artist(models.Model):
    name = models.CharField(max_length=100)
    year_began = models.IntegerField()
    members = models.TextField(max_length=None, blank=True, default='')

    class Meta:
        ordering = ('name',)

class Album(models.Model):
    title = models.CharField(max_length=100, blank=True, default='')
    genre = models.CharField(max_length=100, blank=True, default='')
    year_released = models.IntegerField(unique_for_year="year_released")

    class Meta:
        ordering = ('title',)

class Songs(models.Model):
    title = models.CharField(max_length=100)
    length = models.TimeField()
    year_released = models.IntegerField(unique_for_year="year_released")

    class Meta:
        ordering = ('title',)
