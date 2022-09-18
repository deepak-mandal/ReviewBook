import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './PAGES/home-page/home-page.component';
import { RegistrationComponent } from './registration/registration.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SearchComponent } from './search/search.component';
import { AddNewProductComponent } from './PAGES/add-new-product/add-new-product.component';
import { ProductsComponent } from './products/products.component';
import { ProfileComponent } from './profile/profile.component';
import { ReviewPageComponent } from './PAGES/review-page/review-page.component';
import { ProductPageComponent } from './product-page/product-page.component';


//for component
const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegistrationComponent,
  },
  /*{
    path: 'home',
    component: HomeComponent,
  },*/
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'product',
    component: ProductPageComponent,
  },
  {
    path: 'landing',
    component: LandingComponent,
  },
  {
    path: 'search/:selectedCategory/:userQuery',
    component: SearchResultsComponent
  },
  {
    path: 'searchzone',
    component: SearchComponent
  },
  {
    path: 'add-new-product',
    component: AddNewProductComponent
  },
 {
    path:'review/:productId',
    component:ReviewPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
