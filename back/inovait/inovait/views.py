# inovait/views.py
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Student, Teacher, School, StudentGroup, GroupT
from .serializers import SchoolSerializer, TeacherSerializer, TeacherSchoolSerializer, StudentSerializer, GroupSerializer, StudentGroupSerializer, ClassSerializer, ClassStudentSerializer, EnrollmentFeeSerializer 


# students functions
def getStudents(request):
    students = list(Student.objects.all().values())
    return JsonResponse(students, safe=False)


def getStudentById(request):
    student_id = request.GET.get('id')
    if student_id is not None:
        students = list(Student.objects.filter(id=student_id).values())
        return JsonResponse(students, safe=False)
    return JsonResponse({'error': 'Missing id parameter'}, status=400)


def getStudentBySchool(request):
    school_id = request.GET.get('school_id')
    if not school_id:
        return JsonResponse({'error': 'school_id is required'}, status=400)

    try:
        students = list(Student.objects.filter(school__id=school_id).values())
        return JsonResponse(students, safe=False)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)


@api_view(['POST'])
def create_student(request):
    serializer = StudentSerializer(data=request.data)
    print(serializer.errors)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# teachers functions
def getTeachers(request):
    teachers = list(Teacher.objects.all().values())
    return JsonResponse(teachers, safe=False)


# schools functions
def getSchools(request):
    schools = list(School.objects.all().values())
    return JsonResponse(schools, safe=False)


# student groups functions
def getStudentGroups(request):
    studentGroup = list(StudentGroup.objects.all().values())
    return JsonResponse(studentGroup, safe=False)


def getStudentGroupsByGroupId(request):
    group_id = request.GET.get('group')
    if group_id is None:
        return JsonResponse({'error': 'Missing group parameter'}, status=400)

    student_groups = list(StudentGroup.objects.filter(group=group_id).values())
    return JsonResponse(student_groups, safe=False)


# groupT functions
def getGroupT(request):
    groupsT = list(GroupT.objects.all().values())
    return JsonResponse(groupsT, safe=False)


def getGroupTByGrade(request):
    grade = request.GET.get('grade')
    if grade:
        groupsT = list(GroupT.objects.filter(grade=grade).values())
        return JsonResponse(groupsT, safe=False)
    return JsonResponse({'error': 'grade parameter is required'}, status=400)


def getGroupByYear(request):
    year = request.GET.get('year')
    if year:
        groupsT = list(GroupT.objects.filter(year=year).values())
        return JsonResponse(groupsT, safe=False)
    return JsonResponse({'error': 'year parameter is required'}, status=400)
