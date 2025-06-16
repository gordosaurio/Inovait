import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentFilterDialogComponent } from './student-filter-dialog.component';

describe('StudentFilterDialogComponent', () => {
  let component: StudentFilterDialogComponent;
  let fixture: ComponentFixture<StudentFilterDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentFilterDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentFilterDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
