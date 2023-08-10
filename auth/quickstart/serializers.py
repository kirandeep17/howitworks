from rest_framework import serializers
from .models import Campaign, Category, CustomUser, Subscriber, Tutorials, User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password']
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance
    
    def update(self, instance, validated_data):
        instance.username = validated_data.get('username', instance.username)
        instance.email = validated_data.get('email', instance.email)
        instance.password = validated_data.get('password', instance.password)
        instance.author = validated_data.get('author', instance.author)
        instance.type = validated_data.get('type', instance.type)
        instance.gender = validated_data.get('gender', instance.gender)
        instance.date_of_birth = validated_data.get('date_of_birth', instance.date_of_birth)
        instance.phone_number = validated_data.get('phone_number', instance.phone_number)
        instance.designation = validated_data.get('designation', instance.designation)
        instance.save()
        return instance


#have to serialize the book and booktype here for json


###############################

class CampaignSerializer(serializers.ModelSerializer):

    class Meta:
        model=Campaign
        fields="__all__"

class SubscriberSerializer(serializers.ModelSerializer):

    class Meta:
        model=Subscriber
        fields="__all__"

class TutorialsSerializer(serializers.ModelSerializer):
    myauthor = serializers.CharField(source='author.username',read_only=True)
    class Meta:
        model=Tutorials
        fields="__all__"

class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model=Category
        fields="__all__"

class CustomUserSerializer(serializers.ModelSerializer):

    class Meta:
        model=CustomUser
        fields="__all__"

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model=User
        fields="__all__"
        

