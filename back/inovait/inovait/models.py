# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class Class(models.Model):
    name = models.CharField(max_length=100, blank=True, null=True)
    grade = models.IntegerField(blank=True, null=True)
    week_day = models.CharField(max_length=50, blank=True, null=True)
    start_time = models.CharField(max_length=5, blank=True, null=True)
    end_time = models.CharField(max_length=5, blank=True, null=True)
    year = models.IntegerField(blank=True, null=True)
    classroom = models.CharField(max_length=50, blank=True, null=True)
    teacher = models.ForeignKey('Teacher', models.DO_NOTHING, blank=True, null=True)
    school = models.ForeignKey('School', models.DO_NOTHING, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'class'


class ClassStudent(models.Model):
    student = models.ForeignKey('Student', models.DO_NOTHING, blank=True, null=True)
    class_field = models.ForeignKey(Class, models.DO_NOTHING, db_column='class_id', blank=True, null=True)  # Field renamed because it was a Python reserved word.

    class Meta:
        managed = False
        db_table = 'class_student'


class EnrollmentFee(models.Model):
    student = models.ForeignKey('Student', models.DO_NOTHING, blank=True, null=True)
    school = models.ForeignKey('School', models.DO_NOTHING, blank=True, null=True)
    due_date = models.DateField(blank=True, null=True)
    payment_date = models.DateField(blank=True, null=True)
    status = models.BooleanField(blank=True, null=True)
    year = models.IntegerField(blank=True, null=True)
    value = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'enrollment_fee'


class GroupT(models.Model):
    grade = models.IntegerField(blank=True, null=True)
    name = models.CharField(max_length=100, blank=True, null=True)
    year = models.IntegerField(blank=True, null=True)
    school = models.ForeignKey('School', models.DO_NOTHING, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'group_t'


class School(models.Model):
    name = models.CharField(max_length=100, blank=True, null=True)
    address = models.CharField(max_length=255, blank=True, null=True)
    city = models.CharField(max_length=100, blank=True, null=True)
    phone_number = models.CharField(max_length=20, blank=True, null=True)
    email = models.CharField(max_length=100, blank=True, null=True)
    website = models.CharField(max_length=100, blank=True, null=True)
    is_public = models.BooleanField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'school'


class Student(models.Model):
    name = models.CharField(max_length=100, blank=True, null=True)
    birth_date = models.DateField(blank=True, null=True)
    gender = models.CharField(max_length=10, blank=True, null=True)
    school = models.ForeignKey(School, models.DO_NOTHING, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'student'


class StudentGroup(models.Model):
    student = models.ForeignKey(Student, models.DO_NOTHING, blank=True, null=True)
    group = models.ForeignKey(GroupT, models.DO_NOTHING, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'student_group'


class Teacher(models.Model):
    birth_date = models.DateField(blank=True, null=True)
    name = models.CharField(max_length=100, blank=True, null=True)
    card_id = models.IntegerField(unique=True, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'teacher'


class TeacherSchool(models.Model):
    teacher = models.ForeignKey(Teacher, models.DO_NOTHING, blank=True, null=True)
    school = models.ForeignKey(School, models.DO_NOTHING, blank=True, null=True)
    contract_start = models.DateField(blank=True, null=True)
    contract_finish = models.DateField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'teacher_school'
