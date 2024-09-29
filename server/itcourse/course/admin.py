from django.contrib import admin
from .models import Course,Technology,NameNumber,CourseCard
# Register your models here.

admin.site.register(Course)
admin.site.register(Technology)
admin.site.register(NameNumber)
admin.site.register(CourseCard)