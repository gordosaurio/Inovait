import { Component, Inject } from '@angular/core';
import { Student, School } from '../app/models/types';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';
CommonModule

@Component({
  selector: 'app-student-form-dialog',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  templateUrl: './student-form-dialog.component.html',
  styleUrl: './student-form-dialog.component.scss'
})

export class StudentFormDialogComponent {
  studentForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: { student?: Student, schools: School[] },
    public dialogRef: MatDialogRef<StudentFormDialogComponent>
  ) {
    this.studentForm = this.fb.group({
      name: [data.student?.name || '', Validators.required],
      birth_date: [data.student?.birth_date || '', Validators.required],
      gender: [data.student?.gender || '', Validators.required],
      school: [data.student?.school || '', Validators.required],
    });
  }

  onSubmit() {
    if (this.studentForm.valid) {
      this.dialogRef.close(this.studentForm.value);
    }
  }
}