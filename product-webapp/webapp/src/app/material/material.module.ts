import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatSliderModule} from '@angular/material/slider';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTooltipModule} from '@angular/material/tooltip';

const materialComponent = [MatButtonModule,MatIconModule,MatToolbarModule,MatMenuModule,MatCardModule,MatDividerModule,MatSliderModule,MatProgressSpinnerModule,MatSnackBarModule,MatTooltipModule]

@NgModule({
  exports: [materialComponent],
  imports: [materialComponent]
})
export class MaterialModule { }
