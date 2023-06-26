from django.urls import include, re_path, path
from rest_framework import routers
from lessons.views import LessonsViewSet


router = routers.DefaultRouter()
router.register(r'lessons', LessonsViewSet, basename="lessons")

urlpatterns = [
    re_path(r'^', include(router.urls))
]
