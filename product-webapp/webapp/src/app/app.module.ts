import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LandingComponent } from './landing/landing.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MaterialModule } from './material/material.module';
import { SearchComponent } from './search/search.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { RegistrationComponent } from './registration/registration.component';
import { AddNewProductComponent } from './PAGES/add-new-product/add-new-product.component';

// Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card'; 
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { NavbarComponent } from './COMMON/navbar/navbar.component';
import { ProductComponent } from './COMMON/product/product.component';
import { CarouselComponent } from './COMMON/carousel/carousel.component';
import { HomePageComponent } from './PAGES/home-page/home-page.component';
import {MatSelectModule} from '@angular/material/select';
import { ReviewPageComponent } from './PAGES/review-page/review-page.component'; 
import { MatSnackBarModule } from '@angular/material/snack-bar';

// Services
import { NewProductService } from './SERVICE/new-product.service';
import { ProductsComponent } from './products/products.component';
import { ProductsService } from './products.service';
import { ProfileComponent } from './profile/profile.component';
import { ProductPageComponent } from './product-page/product-page.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    LandingComponent,
    SearchComponent,
    HomeComponent,
    NavigationComponent,
    SearchResultsComponent,
    RegistrationComponent,
    NavbarComponent,
    ProductComponent,
    CarouselComponent,
    HomePageComponent,
    ReviewPageComponent,
    AddNewProductComponent,
    ProductsComponent,
    ProfileComponent,
    ProductPageComponent   
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
    MaterialModule,
    MatSelectModule,
    MatSnackBarModule
  ],
  providers: [ApiService, ProductsService, NewProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
