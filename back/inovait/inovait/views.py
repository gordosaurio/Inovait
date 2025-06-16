# inovait/views.py
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Student, Teacher, School, StudentGroup, GroupT
from .serializers import SchoolSerializer, TeacherSerializer, TeacherSchoolSerializer, StudentSerializer, GroupSerializer, StudentGroupSerializer, ClassSerializer, ClassStudentSerializer, EnrollmentFeeSerializer 


def getStudents(request):
    students = list(Student.objects.all().values())
    return JsonResponse(students, safe=False)


def getStudentBySchool(request):
    school_id = request.GET.get('school_id')
    if not school_id:
        return JsonResponse({'error': 'school_id is required'}, status=400)

    try:
        students = list(Student.objects.filter(school__id=school_id).values())
        return JsonResponse(students, safe=False)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)


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


@api_view(['POST'])
def create_student(request):
    serializer = StudentSerializer(data=request.data)
    print(serializer.errors)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
