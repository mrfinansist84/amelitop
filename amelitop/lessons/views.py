from rest_framework import viewsets
from lessons.models import Lesson, Text, Video, Picture
from lessons.serializers import LessonSerializer
from rest_framework.decorators import action
from rest_framework.response import Response

class LessonsViewSet(viewsets.ModelViewSet):
    serializer_class = LessonSerializer

    def get_queryset(self):
        return Lesson.objects.all()

    def create(self, request, *args, **kwargs):
        data = request.data
        new_lesson = Lesson.objects.create(
            title = data['title']
        )
        new_lesson.save()

        if (data['text']):
         for item in data['text']:
            text_obj = Text.objects.create(item)
            text_obj.save()
            new_lesson.text.add(text_obj)
        else:
          new_lesson.text.add([])
  
        if (data['picture']):
         for item in data['picture']:
            picture_obj = Picture.objects.create(item)
            picture_obj.save()
            new_lesson.picture.add(picture_obj)
        else:
          new_lesson.picture.add([])

        if (data['video']):
          for item in data['video']:
              video_obj = Video.objects.create(item)
              video_obj.save()
              new_lesson.video.add(video_obj)
        else:
          new_lesson.video.add([])

        serializer = LessonSerializer(new_lesson)

        return Response(serializer.data)
    