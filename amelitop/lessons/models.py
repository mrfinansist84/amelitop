from django.db import models

TYPE = [
    ('text', 'text'),
    ('video', 'video'),
    ('picture', 'picture')
]

class Text(models.Model):
    text = models.TextField(default='')
    title = models.CharField(max_length=100, blank=True, default='')
    index = models.IntegerField(default=0)
    type = models.CharField(max_length=100, choices=TYPE, default='text')

    def __str__(self):
        return "{}".format(self.text)

class Video(models.Model):  
    link = models.TextField(default='')
    title = models.CharField(max_length=100, blank=True, default='')
    index = models.IntegerField(default=0)
    type = models.CharField(max_length=100, choices=TYPE, default='video')
    def __str__(self):
        return "{}".format(self.link)

class Picture(models.Model): 
    link = models.TextField(default='')
    title = models.CharField(max_length=100, blank=True, default='')
    index = models.IntegerField(default=0)
    type = models.CharField(max_length=100, choices=TYPE, default='picture')

    def __str__(self):
        return "{}".format(self.link)

class Lesson(models.Model):
    title = models.CharField(max_length=100, blank=True, default='')
    text = models.ManyToManyField(Text)
    video = models.ManyToManyField(Video)
    picture = models.ManyToManyField(Picture)

    def __str__(self):
        return "{}".format(self.title)