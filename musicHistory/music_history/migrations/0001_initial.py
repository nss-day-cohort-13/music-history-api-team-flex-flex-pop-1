# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2016-09-07 20:19
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Album',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(blank=True, default='', max_length=100)),
                ('linenos', models.BooleanField(default=False)),
                ('genre', models.CharField(blank=True, default='', max_length=100)),
                ('year_released', models.IntegerField(max_length=4, unique_for_year='year_released')),
            ],
            options={
                'ordering': ('title',),
            },
        ),
        migrations.CreateModel(
            name='Artist',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('linenos', models.BooleanField(default=False)),
                ('year_began', models.IntegerField(max_length=4)),
                ('members', models.TextField(blank=True, default='')),
            ],
            options={
                'ordering': ('name',),
            },
        ),
        migrations.CreateModel(
            name='Songs',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('length', models.TimeField()),
                ('title', models.CharField(blank=True, default='', max_length=100)),
                ('linenos', models.BooleanField(default=False)),
                ('year_released', models.IntegerField(max_length=4, unique_for_year='year_released')),
            ],
            options={
                'ordering': ('name',),
            },
        ),
    ]