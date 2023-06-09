# Generated by Django 4.1 on 2023-06-23 06:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('lessons', '0002_picture_index_text_index_video_index'),
    ]

    operations = [
        migrations.AddField(
            model_name='picture',
            name='type',
            field=models.CharField(choices=[('text', 'text'), ('video', 'video'), ('picture', 'picture')], default='picture', max_length=100),
        ),
        migrations.AddField(
            model_name='text',
            name='type',
            field=models.CharField(choices=[('text', 'text'), ('video', 'video'), ('picture', 'picture')], default='text', max_length=100),
        ),
        migrations.AddField(
            model_name='video',
            name='type',
            field=models.CharField(choices=[('text', 'text'), ('video', 'video'), ('picture', 'picture')], default='video', max_length=100),
        ),
    ]
