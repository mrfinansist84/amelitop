# Generated by Django 4.1 on 2023-06-22 13:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('lessons', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='picture',
            name='index',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='text',
            name='index',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='video',
            name='index',
            field=models.IntegerField(default=0),
        ),
    ]
