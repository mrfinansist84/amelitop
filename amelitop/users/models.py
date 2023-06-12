from django.conf import settings
from django.contrib.auth.models import AbstractUser
from django.db import models

ROLE_CHOICES = (
    ('ADMIN', 'Admin'),
    ('TEACHER', 'Teacher'),
    ('STUDENT', 'Student')
)


class User(AbstractUser):
    username = models.CharField(max_length=150, blank=True, null=True)
    email = models.EmailField(unique=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    def __str__(self):
        return "{}".format(self.email)


class UserProfile(models.Model):
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='profile'
    )

    role = models.CharField(max_length=7, choices=ROLE_CHOICES)
    phone = models.CharField(max_length=12, blank=True)
    photo = models.ImageField(upload_to=None, blank=True, null=True)
    is_blocked = models.BooleanField(blank=True, default=False)
