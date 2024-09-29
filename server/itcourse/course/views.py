# course/views.py
from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import MasterClass, Technology, Course,NameNumber,CourseCard
from .serializers import MasterClassSerializer, TechnologySerializer, CourseSerializer, NameNumberSerializer,CardSerializer
from django.http import HttpResponse, Http404


class NameNumberViewSet(viewsets.ModelViewSet):
    queryset = NameNumber.objects.all()
    serializer_class = NameNumberSerializer


class TechnologyViewSet(viewsets.ModelViewSet):
    queryset = Technology.objects.all()
    serializer_class = TechnologySerializer

class CourseViewSet(viewsets.ModelViewSet):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer


class MasterClassViewSet(viewsets.ModelViewSet):
    queryset = MasterClass.objects.all()
    serializer_class = MasterClassSerializer


@api_view(['POST'])
def create_course(request):
    serializer = CourseSerializer(data=request.data)
    if serializer.is_valid():
        course_instance = serializer.save()

        # Добавляем технологии, если они предоставлены в запросе
        technologies_data = request.data.get('technologies', [])
        if technologies_data:
            for tech_data in technologies_data:
                # Создаем каждую технологию и связываем с курсом
                Technology.objects.create(name=tech_data['name'], course=course_instance)

        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



class CardView(viewsets.ModelViewSet):
    queryset = CourseCard.objects.all()
    serializer_class = CardSerializer





def image_view(request, filename):
    # Логика обработки запроса
    try:
        with open(f'path/to/images/{filename}', 'rb') as f:
            return HttpResponse(f.read(), content_type='image/png')
    except FileNotFoundError:
        raise Http404("Image does not exist")
