import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './product-features/user-management/services/api.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NewProductService } from './product-features/product-management/services/new-product.service';
import { ProductsService } from './product-features/product-management/services/products.service';
import { ProductFeaturesModule } from './product-features/product-features.module';
import { AgGridModule } from 'ag-grid-angular';
// import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    
    MatSelectModule,
    MatSnackBarModule,
    ProductFeaturesModule,
    // NgxPaginationModule,
    AgGridModule
  ],
  providers: [ApiService, ProductsService, NewProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
