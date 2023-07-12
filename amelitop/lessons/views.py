from rest_framework import viewsets
from lessons.models import Lesson, Text, Video, Picture
from lessons.serializers import LessonSerializer
from rest_framework.response import Response

class LessonsViewSet(viewsets.ModelViewSet):
    serializer_class = LessonSerializer

    def mutator(self, model, currentData, fieldList, action):
        if (action == 'create'):
           result = model()

        if(action == 'update'):
            result = model.objects.get(id=currentData['id'])

        for item in fieldList:
          setattr(result, item, currentData[item])
        return result
    
    def get_queryset(self):
        return Lesson.objects.prefetch_related("text").prefetch_related("video").prefetch_related("picture")

    def create(self, request, *args, **kwargs):
        data = request.data
        new_lesson = Lesson.objects.create(
            title = data['title']
        )
        new_lesson.save()

        if (data.get('text')):
          for item in data['text']:
                text_obj = self.mutator(Text, item, ['text', 'title', 'index', 'type'], 'create')
                text_obj.save()
                new_lesson.text.add(text_obj)
  
        if (data.get('picture')):
          for item in data['picture']:
                picture_obj = self.mutator(Picture, item, ['link', 'title', 'index', 'type'], 'create')
                picture_obj.save()
                new_lesson.picture.add(picture_obj)

        if (data.get('video')):
          for item in data['video']:
                video_obj = self.mutator(Video, item, ['link', 'title', 'index', 'type'], 'create')
                video_obj.save()
                new_lesson.video.add(video_obj)

        serializer = LessonSerializer(new_lesson)

        return Response(serializer.data)
    
    def update(self, request, *args, **kwargs):
        instance = Lesson.objects.get(id=request.data['id'])
        instance.title = request.data["title"]
        instance.text.set([])
        instance.video.set([])
        instance.picture.set([])
        instance.save()

        if (request.data.get('text')):
          text_data = request.data.pop('text')
          for item in text_data:
            if (item.get('id')):
               text_instance = self.mutator(Text, item, ['text', 'title', 'index', 'type'], 'update')
            else:
              text_instance = self.mutator(Text, item, ['text', 'title', 'index', 'type'], 'create')
            text_instance.save()
            instance.text.add(text_instance)
        
        if (request.data.get('video')):
          video_data = request.data.pop('video')
          for item in video_data:
            if (item.get('id')):
               video_instance = self.mutator(Video, item, ['link', 'title', 'index', 'type'], 'update')
            else:
              video_instance = self.mutator(Video, item, ['link', 'title', 'index', 'type'], 'create')
            
            video_instance.save()
            instance.video.add(video_instance)
        
        if (request.data.get('picture')):
          picture_data = request.data.pop('picture')
          for item in picture_data:
            if (item.get('id')):
              picture_instance = self.mutator(Picture, item, ['link', 'title', 'index', 'type'], 'update')
            else:
              picture_instance = self.mutator(Picture, item, ['link', 'title', 'index', 'type'], 'create')
            
            picture_instance.save()
            instance.picture.add(picture_instance)
            
        serializer = LessonSerializer(instance)
        return Response(serializer.data)
    
    