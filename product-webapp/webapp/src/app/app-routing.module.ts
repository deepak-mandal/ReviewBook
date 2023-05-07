import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './product-features/user-management/components/login/login.component';
import { RegistrationComponent } from './product-features/user-management/components/registration/registration.component';
import { ManageProductComponent } from './product-features/product-management/components/manage-product/manage-product.component';
import { DashboardComponent } from './product-features/reviewbook-home/components/dashboard/dashboard.component';
import { ReviewsComponent } from './product-features/review-management/components/reviews/reviews.component';
import { AboutReviewbookPlatformComponent } from './product-features/reviewbook-home/components/about-reviewbook-platform/about-reviewbook-platform.component';
import { ManageProfileComponent } from './product-features/user-management/components/manage-profile/manage-profile.component';
import { NavigationComponent } from './product-features/reviewbook-home/components/navigation/navigation.component';


const routes: Routes = [
  {
    path: '',
    component: NavigationComponent,
  },
  {
    path: 'info',
    component: AboutReviewbookPlatformComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegistrationComponent,
  },
  // {
  //   path: 'dashboard',
  //   component: DashboardComponent,
  // },
  {
    path: 'profile',
    component: ManageProfileComponent,
  },
  {
    path: 'products',
    component: ManageProductComponent,
  },
  // {
  //   path: 'about-reviewbook-platform',
  //   component: AboutReviewbookPlatformComponent,
  // },
  {
    path: 'review/:productId',
    component: ReviewsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
