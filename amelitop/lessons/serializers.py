from rest_framework import serializers
from lessons.models import Lesson, Text, Video, Picture

class TextSerializer(serializers.ModelSerializer):
    # lesson = serializers.PrimaryKeyRelatedField(
    #     many=True, queryset=Lesson.objects.all())
    class Meta:
        model = Text
        fields = ['id', 'text', 'title', 'index']

class VideoSerializer(serializers.ModelSerializer):
    # lesson = serializers.PrimaryKeyRelatedField(
    #     many=True, queryset=Lesson.objects.all())
    class Meta:
        model = Video
        fields = ['id', 'link', 'title', 'index']

class PictureSerializer(serializers.ModelSerializer):
    # lesson = serializers.PrimaryKeyRelatedField(
    #     many=True, queryset=Lesson.objects.all())
    class Meta:
        model = Picture
        fields = ['id', 'link', 'title', 'index']

class LessonSerializer(serializers.ModelSerializer):
    text = TextSerializer(many=True, required=False)
    video = VideoSerializer(many=True, required=False)
    picture = PictureSerializer(many=True, required=False)

    class Meta:
        model = Lesson
        fields = ['id', 'title', 'text', 'video', 'picture']

    # def create(self, validated_data):
    #     text_data = validated_data.pop('text')
    #     video_data = validated_data.pop('video')
    #     picture_data = validated_data.pop('picture')

    #     lesson = Lesson(**validated_data)
    #     lesson.save()

    #     Text.objects.create(**text_data)
    #     Video.objects.create(**video_data)
    #     Picture.objects.create(**picture_data)

    #     return lesson
    
    # def update(self, instance, validated_data):
    #     instance.email = validated_data.get('email', instance.email)
    #     instance.first_name = validated_data.get('first_name', instance.first_name)
    #     instance.last_name = validated_data.get('last_name', instance.last_name)
    #     instance.save()

    #     text_data = validated_data.pop('text')
    #     text_instance, _ = Text.objects.get_or_create(lesson=instance)

    #     text_instance.lesson_id = text_data.get('lesson_id', text_instance.lesson_id)
    #     text_instance.text = text_data.get('text', text_instance.text)
    #     text_instance.save()

    #     return instance
