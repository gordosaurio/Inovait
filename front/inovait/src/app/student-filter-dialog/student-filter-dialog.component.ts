import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { HttpClient } from '@angular/common/http';

interface FilterDialogData {
  type: 'school' | 'year' | 'grade';
  schools: any[];
}

@Component({
  selector: 'app-student-filter-dialog',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatListModule,
    MatButtonToggleModule
  ],
  templateUrl: './student-filter-dialog.component.html',
  styleUrl: './student-filter-dialog.component.scss'
})
export class StudentFilterDialogComponent {
  filterType: 'school' | 'year' | 'grade';
  schools: any[];
  schoolId: number | null = null;
  year: number | null = null;
  grade: number | null = null;
  students: any[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: FilterDialogData,
    private http: HttpClient,
    public dialogRef: MatDialogRef<StudentFilterDialogComponent>
  ) {
    this.filterType = data.type;
    this.schools = data.schools;
  }

  fetchStudentsBySchool() {
    if (this.schoolId != null) {
      this.http.get<any[]>(`http://127.0.0.1:8000/student/getStudentBySchool?school_id=${this.schoolId}`)
        .subscribe(res => this.students = res);
    }
  }

  fetchStudentsByYear() {
    if (this.year != null) {
      this.http.get<any[]>(`http://127.0.0.1:8000/student/getStudentsByYear?year=${this.year}`)
        .subscribe(res => this.students = res);
    }
  }

  fetchStudentsByGrade() {
    if (this.grade != null) {
      this.http.get<any[]>(`http://127.0.0.1:8000/student/getStudentsByGrade?grade=${this.grade}`)
        .subscribe(res => this.students = res);
    }
  }

  buscar() {
    if (this.filterType === 'school') {
      this.fetchStudentsBySchool();
    } else if (this.filterType === 'year') {
      this.fetchStudentsByYear();
    } else if (this.filterType === 'grade') {
      this.fetchStudentsByGrade();
    }
  }
}
