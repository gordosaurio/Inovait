import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-detail-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './detail-dialog.component.html',
  styleUrl: './detail-dialog.component.scss'
})
export class DetailDialogComponent {
  dataKeys: string[];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.dataKeys = Object.keys(data || {});
  }
}
