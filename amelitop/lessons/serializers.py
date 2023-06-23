from rest_framework import serializers
from lessons.models import Lesson, Text, Video, Picture

class TextSerializer(serializers.ModelSerializer):
    class Meta:
        model = Text
        fields = ['id', 'text', 'title', 'index', 'type']

class VideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Video
        fields = ['id', 'link', 'title', 'index', 'type']

class PictureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Picture
        fields = ['id', 'link', 'title', 'index', 'type']

class LessonSerializer(serializers.ModelSerializer):
    text = TextSerializer(many=True, required=False)
    video = VideoSerializer(many=True, required=False)
    picture = PictureSerializer(many=True, required=False)

    class Meta:
        model = Lesson
        fields = ['id', 'title', 'text', 'video', 'picture']
