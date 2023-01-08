import { Component } from '@angular/core';
import { AuthService } from './product-features/user-management/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "ReviewBook";
  constructor(public authService: AuthService) {}
}
