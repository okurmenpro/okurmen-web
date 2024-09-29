# course/models.py
from django.db import models

class Course(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    start_date = models.DateField()

    def __str__(self):
        return self.title

class Technology(models.Model):
    name = models.CharField(max_length=100)
    course = models.ForeignKey(Course, related_name='technologies', on_delete=models.CASCADE)

    def __str__(self):
        return self.name


class MasterClass(models.Model):
    CHOICES = [
        ('онлайн', 'Онлайн'),
        ('оффлайн', 'Оффлайн'),
    ]

    title = models.CharField(max_length=200)
    date = models.DateField()
    choice = models.CharField(max_length=10, choices=CHOICES)

    def __str__(self):
        return self.title
    
    
    
class NameNumber(models.Model):
    name = models.CharField(max_length=100)
    number = models.CharField(max_length=15)
    def __str__(self):
        return self.name
        
        
        
class CourseCard(models.Model):
    image = models.ImageField(upload_to='image/')
    title = models.CharField(max_length=50)
    description = models.CharField(max_length=200)

    def __str__(self):
        return self.title
    