import { Component, Inject } from '@angular/core';
import { Student, School } from '../app/models/types';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatOptionModule } from '@angular/material/core';

@Component({
  selector: 'app-student-form-dialog',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatOptionModule
  ],
  templateUrl: './student-form-dialog.component.html',
  styleUrl: './student-form-dialog.component.scss'
})
export class StudentFormDialogComponent {
  studentForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    @Inject(MAT_DIALOG_DATA) public data: { student?: Student, schools: School[] },
    public dialogRef: MatDialogRef<StudentFormDialogComponent>
  ) {
    this.studentForm = this.fb.group({
      name: [data.student?.name || '', Validators.required],
      birth_date: [data.student?.birth_date || '', Validators.required],
      gender: [data.student?.gender || '', Validators.required],
      school: [data.student?.school || '', Validators.required]
    });
  }

  onSubmit() {
    if (this.studentForm.valid) {
      const studentData = this.studentForm.value;
  
      // Formatear la fecha al formato YYYY-MM-DD
      if (studentData.birth_date) {
        const date = new Date(studentData.birth_date);
        studentData.birth_date = date.toISOString().slice(0, 10);
      }
  
      this.http.post<any>('http://127.0.0.1:8000/student/create_student', studentData).subscribe({
        next: (response) => {
          console.log('Estudiante creado:', response);
          this.dialogRef.close(response);
        },
        error: (err) => {
          console.error('Error al crear estudiante:', err);
        }
      });
    }
  }  
}
