# course/serializers.py
from rest_framework import serializers
from .models import Technology, Course, MasterClass,NameNumber,CourseCard

class TechnologySerializer(serializers.ModelSerializer):
    course_id = serializers.PrimaryKeyRelatedField(queryset=Course.objects.all(), source='course', write_only=True)

    class Meta:
        model = Technology
        fields = ['id', 'name', 'course_id']

class CourseSerializer(serializers.ModelSerializer):
    technologies = TechnologySerializer(many=True, required=False)

    class Meta:
        model = Course
        fields = ['id', 'title', 'description', 'start_date', 'technologies']

class MasterClassSerializer(serializers.ModelSerializer):
    class Meta:
        model = MasterClass
        fields = ['id', 'title', 'date', 'choice']


class NameNumberSerializer(serializers.ModelSerializer):
    class Meta:
        model = NameNumber
        fields = ['name', 'number']
        
class CardSerializer(serializers.ModelSerializer):
    class Meta:
        model = CourseCard
        fields = '__all__'