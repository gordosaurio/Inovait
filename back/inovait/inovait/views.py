# inovait/views.py
from django.http import JsonResponse
from .models import Student


def getStudents():
    students = list(Student.objects.all().values())
    return JsonResponse(students, safe=False)
