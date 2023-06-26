from django.contrib import admin

from .models import Lesson, Text, Video, Picture


class LessonAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'text', 'video', 'picture')
    search_fields = ('title')
    ordering = ('title')

admin.site.register(Lesson)
admin.site.register(Text)
admin.site.register(Video)
admin.site.register(Picture)
