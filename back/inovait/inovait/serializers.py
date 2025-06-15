from rest_framework import serializers
from .models import (
    School, Teacher, TeacherSchool, Student, GroupT,
    StudentGroup, Class, ClassStudent, EnrollmentFee
)


class SchoolSerializer(serializers.ModelSerializer):
    class Meta:
        model = School
        fields = '__all__'


class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teacher
        fields = '__all__'


class TeacherSchoolSerializer(serializers.ModelSerializer):
    class Meta:
        model = TeacherSchool
        fields = '__all__'


class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = '__all__'


class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = GroupT
        fields = '__all__'


class StudentGroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentGroup
        fields = '__all__'


class ClassSerializer(serializers.ModelSerializer):
    class Meta:
        model = Class
        fields = '__all__'


class ClassStudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = ClassStudent
        fields = '__all__'


class EnrollmentFeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = EnrollmentFee
        fields = '__all__'
