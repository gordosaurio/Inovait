# inovait/views.py
from django.http import JsonResponse
from .models import Student, Teacher, School


def getStudents(request):
    students = list(Student.objects.all().values())
    return JsonResponse(students, safe=False)


def getTeachers(request):
    teachers = list(Teacher.objects.all().values())
    return JsonResponse(teachers, safe=False)


def getSchools(request):
    schools = list(School.objects.all().values())
    return JsonResponse(schools, safe=False)
