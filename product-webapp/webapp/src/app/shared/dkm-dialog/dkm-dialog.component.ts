import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ReviewData } from 'src/app/product-features/review-management/types/review.interface';

@Component({
  selector: 'app-dkm-dialog',
  templateUrl: './dkm-dialog.component.html',
  styleUrls: ['./dkm-dialog.component.scss']
})
export class DkmDialogComponent implements OnInit {

  constructor(   public dialogRef: MatDialogRef<DkmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ReviewData,) { }

  ngOnInit(): void {
  }

  // @Input() data!: any
  onNoClick(): void {
    this.dialogRef.close();
  }

}
