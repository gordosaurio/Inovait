# inovait/views.py
from django.http import JsonResponse
from .models import Student, Teacher, School, StudentGroup, GroupT


def getStudents(request):
    students = list(Student.objects.all().values())
    return JsonResponse(students, safe=False)


def getTeachers(request):
    teachers = list(Teacher.objects.all().values())
    return JsonResponse(teachers, safe=False)


def getSchools(request):
    schools = list(School.objects.all().values())
    return JsonResponse(schools, safe=False)


def getStudentGroups(request):
    studentGroup = list(StudentGroup.objects.all().values())
    return JsonResponse(studentGroup, safe=False)


def getGroupT(request):
    groupsT = list(GroupT.objects.all().values())
    return JsonResponse(groupsT, safe=False)
