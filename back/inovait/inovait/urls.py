from django.contrib import admin
from django.urls import path
from .views import getStudents, getTeachers, getSchools, getStudentGroups, getGroupT, create_student, getStudentBySchool, getGroupTByGrade, getGroupByYear, getStudentGroupsByGroupId, getStudentById

urlpatterns = [
    path('admin/', admin.site.urls),
    path('student/getStudents', getStudents),
    path('student/getTeachers', getTeachers),
    path('student/getSchools', getSchools),
    path('student/getStudentGroup', getStudentGroups),
    path('student/getGroupT', getGroupT),
    path('student/create_student', create_student),
    path('student/getStudentBySchool', getStudentBySchool),
    path('student/getGroupTByGrade', getGroupTByGrade),
    path('student/getGroupByYear', getGroupByYear),
    path('student/getStudentGroupsByGroupId', getStudentGroupsByGroupId),
    path('student/getStudentById', getStudentById),
]
