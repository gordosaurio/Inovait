import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DetailDialogComponent } from './detail-dialog/detail-dialog.component';
import { StudentFormDialogComponent } from './student-form-dialog/student-form-dialog.component';
import { StudentFilterDialogComponent } from './student-filter-dialog/student-filter-dialog.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatCardModule,
    FlexLayoutModule,
    MatDialogModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'inovait';

  http = inject(HttpClient);
  dialog = inject(MatDialog);

  schools: any[] = [];
  students: any[] = [];
  teachers: any[] = [];

  ngOnInit(): void {
    this.http.get<any[]>('http://127.0.0.1:8000/student/getSchools').subscribe(data => this.schools = data);
    this.http.get<any[]>('http://127.0.0.1:8000/student/getStudents').subscribe(data => this.students = data);
    this.http.get<any[]>('http://127.0.0.1:8000/student/getTeachers').subscribe(data => this.teachers = data);
  }

  openSchoolDialog(school: any): void {
    const data = {
      Nombre: school.name,
      Dirección: school.address,
      Ciudad: school.city,
      Teléfono: school.phone_number,
      Email: school.email,
      SitioWeb: school.website,
      '¿Pública?': school.is_public ? 'Sí' : 'No'
    };
  
    this.dialog.open(DetailDialogComponent, {
      data,
      width: '400px'
    });
  }
  
  openStudentDialog(student: any): void {
    const data = {
      Nombre: student.name,
      'Fecha de nacimiento': student.birth_date,
      Género: student.gender,
      'Escuela asignada': student.school?.name || 'No especificada'
    };
  
    this.dialog.open(DetailDialogComponent, {
      data,
      width: '400px'
    });
  }
  
  openTeacherDialog(teacher: any): void {
    const data = {
      Nombre: teacher.name,
      'Fecha de nacimiento': teacher.birth_date,
      'ID de Tarjeta': teacher.card_id
    };
  
    this.dialog.open(DetailDialogComponent, {
      data,
      width: '400px'
    });
  }

  openStudentFormDialog(student?: any): void {
    console.log('Opening student form dialog');
    console.log('Lista de escuelas:', this.schools);
    const dialogRef = this.dialog.open(StudentFormDialogComponent, {
      width: '80vw',
      panelClass: 'custom-dialog-container',
      data: {
        student: student || null,
        schools: this.schools
      }
    });
  }
  
  openStudentFilterDialogBySchool(): void {
    this.dialog.open(StudentFilterDialogComponent, {
      width: '600px',
      data: {
        type: 'school',
        schools: this.schools
      }
    });
  }
  
  openStudentFilterDialogByYear(): void {
    this.dialog.open(StudentFilterDialogComponent, {
      width: '600px',
      data: {
        type: 'year',
        schools: this.schools
      }
    });
  }
  
  openStudentFilterDialogByGrade(): void {
    this.dialog.open(StudentFilterDialogComponent, {
      width: '600px',
      data: {
        type: 'grade',
        schools: this.schools
      }
    });
  }
}
