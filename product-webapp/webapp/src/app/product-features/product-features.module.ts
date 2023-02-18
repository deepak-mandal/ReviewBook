import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './user-management/components/login/login.component';
import { RegistrationComponent } from './user-management/components/registration/registration.component';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './product-management/components/products/products.component';
import { AddNewProductComponent } from './product-management/components/add-new-product/add-new-product.component';
import { ManageProductComponent } from './product-management/components/manage-product/manage-product.component';
import { DashboardComponent } from './reviewbook-home/components/dashboard/dashboard.component';
import { MatDividerModule } from '@angular/material/divider';
import { HeaderComponent } from './reviewbook-home/components/header/header.component';
import { NavigationComponent } from './reviewbook-home/components/navigation/navigation.component';
import { ReviewsComponent } from './review-management/components/reviews/reviews.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AboutReviewbookPlatformComponent } from './reviewbook-home/components/about-reviewbook-platform/about-reviewbook-platform.component';
import { ManageProfileComponent } from './user-management/components/manage-profile/manage-profile.component';
import { MatCardModule } from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { FooterComponent } from './reviewbook-home/components/footer/footer.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [

    LoginComponent,
    RegistrationComponent,
    ProductsComponent,


    AddNewProductComponent,
    ManageProductComponent,
    DashboardComponent,
    HeaderComponent,
    NavigationComponent,
    ReviewsComponent,
    AboutReviewbookPlatformComponent,
    ManageProfileComponent,
    FooterComponent,
    
  ],
  imports: [
    CommonModule, //not required as we are using shared module that has already this module
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    AppRoutingModule,
    SharedModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatListModule,
    // MatFormFieldModule,
    //     MatInputModule,
    MatPaginatorModule,
    NgxPaginationModule 
    

  ],
  exports: [
    NavigationComponent,
    FooterComponent
  ]
})
export class ProductFeaturesModule { }
