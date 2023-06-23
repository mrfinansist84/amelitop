from rest_framework import viewsets
from lessons.models import Lesson, Text, Video, Picture
from lessons.serializers import LessonSerializer
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

        if (data.get('text')):
          for item in data['text']:
                text_obj = Text.objects.create(
                    title = item['title'],
                    text = item['text'],
                    index = item['index'],
                    type = item['type']
                )
                text_obj.save()
                new_lesson.text.add(text_obj)
  
        if (data.get('picture')):
          for item in data['picture']:
                picture_obj = Picture.objects.create(
                    title = item['title'],
                    link = item['link'],
                    index = item['index'],
                    type = item['type']
                )
                picture_obj.save()
                new_lesson.picture.add(picture_obj)

        if (data.get('video')):
          for item in data['video']:
                video_obj = Video.objects.create(
                  title = item['title'],
                  link = item['link'],
                  index = item['index'],
                  type = item['type']
                )
                video_obj.save()
                new_lesson.video.add(video_obj)

        serializer = LessonSerializer(new_lesson)

        return Response(serializer.data)
    
    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        instance.title = request.data.get("title")
        instance.save()

        if (request.data.get('text')):
          text_data = request.data.pop('text')
          for item in text_data:
            if (item.get('id')):
              text_instance = Text.objects.get(id=item['id'])
              text_instance.text = item['text']
              text_instance.title = item['title']
              text_instance.index = item['index']
              text_instance.type = item['type']
            else:
              text_instance = Text.objects.create(
                  title = item['title'],
                  text = item['text'],
                  index = item['index'],
                  type = item['type']
              )
            text_instance.save()
            instance.text.add(text_instance)
        
        if (request.data.get('video')):
          video_data = request.data.pop('video')
          for item in video_data:
            if (item.get('id')):
              video_instance = Video.objects.get(id=item['id'])
              video_instance.link = item['link']
              video_instance.title = item['title']
              video_instance.index = item['index']
              video_instance.type = item['type']
            else:
              video_instance = Video.objects.create(
                  link = item['link'],
                  title = item['title'],
                  index = item['index'],
                  type = item['type']
              )
            video_instance.save()
            instance.video.add(video_instance)
        
        if (request.data.get('picture')):
          picture_data = request.data.pop('picture')
          for item in picture_data:
            if (item.get('id')):
              picture_instance = Picture.objects.get(id=item['id'])

              picture_instance.link = item['link']
              picture_instance.title = item['title']
              picture_instance.index = item['index']
              picture_instance.type = item['type']
            else:
              picture_instance = Picture.objects.create(
                  link = item['link'],
                  title = item['title'],
                  index = item['index'],
                  type = item['type']
              )
            picture_instance.save()
            instance.picture.add(picture_instance)
            
        serializer = LessonSerializer(instance)
        return Response(serializer.data)
    
    