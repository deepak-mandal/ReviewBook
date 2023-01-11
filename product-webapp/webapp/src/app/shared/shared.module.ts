import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DkmCardComponent } from './dkm-card/dkm-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { DkmDialogComponent } from './dkm-dialog/dkm-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DkmCardComponent,
    DkmDialogComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule
  ],
  exports:[
    DkmCardComponent,
  ]
})
export class SharedModule { }
