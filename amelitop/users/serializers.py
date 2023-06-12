from rest_framework import serializers
from users.models import User, UserProfile


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ('role', 'phone', 'photo', 'is_blocked')


class UserSerializer(serializers.ModelSerializer):
    profile = UserProfileSerializer(required=True)

    class Meta:
        model = User
        fields = ('email', 'password', 'first_name', 'last_name', 'profile')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        profile_data = validated_data.pop('profile')
        password = validated_data.pop('password')

        user = User(**validated_data)
        user.set_password(password)
        user.save()

        UserProfile.objects.create(user=user, **profile_data)

        return user

    def update(self, instance, validated_data):
        instance.email = validated_data.get('email', instance.email)
        instance.first_name = validated_data.get('first_name', instance.first_name)
        instance.last_name = validated_data.get('last_name', instance.last_name)
        instance.save()

        profile_data = validated_data.pop('profile')
        profile, _ = UserProfile.objects.get_or_create(user=instance)

        profile.role = profile_data.get('role', profile.role)
        profile.phone = profile_data.get('phone', profile.phone)
        profile.photo = profile_data.get('photo', profile.photo)
        profile.is_blocked = profile_data.get('is_blocked', profile.is_blocked)
        profile.save()

        return instance
