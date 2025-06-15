import { RouterOutlet } from '@angular/router';
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';

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
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'inovait';

  http = inject(HttpClient);

  schools: any[] = [];
  students: any[] = [];
  teachers: any[] = [];

  ngOnInit(): void {
    this.http.get<any[]>('http://127.0.0.1:8000/student/getSchools').subscribe(data => this.schools = data);
    this.http.get<any[]>('http://127.0.0.1:8000/student/getStudents').subscribe(data => this.students = data);
    this.http.get<any[]>('http://127.0.0.1:8000/student/getTeachers').subscribe(data => this.teachers = data);
  }
}
