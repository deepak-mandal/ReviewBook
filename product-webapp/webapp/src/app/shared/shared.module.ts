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
import { PaginatorComponent } from './paginator/paginator.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { NgxPaginationModule } from 'ngx-pagination';
import { DkmTabComponent } from './dkm-tab/dkm-tab.component';
import {MatTabsModule} from '@angular/material/tabs';
import { DkmCustomTabComponent } from './dkm-custom-tab/dkm-custom-tab.component';

@NgModule({
  declarations: [
    DkmCardComponent,
    DkmDialogComponent,
    PaginatorComponent,
    DkmTabComponent,
    DkmCustomTabComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    MatPaginatorModule,
    MatInputModule,
    MatSlideToggleModule,
    NgxPaginationModule,
    MatTabsModule
  ],
  exports:[
    DkmCardComponent,
    PaginatorComponent,
    DkmTabComponent,
    DkmCustomTabComponent
  ]
})
export class SharedModule { }
