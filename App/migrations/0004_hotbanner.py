# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2018-10-31 11:39
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('App', '0003_goods'),
    ]

    operations = [
        migrations.CreateModel(
            name='Hotbanner',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('img', models.CharField(max_length=100)),
                ('name', models.CharField(max_length=40)),
                ('function', models.CharField(max_length=40)),
            ],
        ),
    ]
