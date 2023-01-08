import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/product-features/user-management/services/api.service';
import { AuthService } from 'src/app/product-features/user-management/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

 
  isLogedinError:boolean=false;


  ngOnInit(): void {
    
  }

  userData:any[]=[];
  
//Implementation for reactive form
form = new FormGroup({
  username: new FormControl('', [Validators.required, Validators.minLength(2)]),
  password: new FormControl('', [Validators.required, Validators.minLength(2)]),
});

constructor(private authService: AuthService, private router: Router, private apiService:ApiService) {}

submitForm() {


  if (this.form.invalid) {
    this.isLogedinError=true;
    return;
  }

  this.authService
    .login(this.form.value)
    .subscribe((response) => {
      this.router.navigate(['/dashboard']).then(() => {
        window.location.reload();
      });

    },
    (err:HttpErrorResponse)=>{
      this.isLogedinError=true;
    }
    );


    this.apiService
    .getUserInfo(this.form.value.username)
    .subscribe(response => {
      sessionStorage.setItem('username', response.username);
      sessionStorage.setItem('role', response.role);
    });
  

}


}
