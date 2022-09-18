import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { RegisterService } from '../register.service';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent  {

  constructor(private formBuilder:FormBuilder,private _registerService:RegisterService){}
  gstpattern = "^([0][1-9]|[1-2][0-9]|[3][0-7])([a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}[1-9a-zA-Z]{1}[zZ]{1}[0-9a-zA-Z]{1})+$";
  emailPattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  password="((?=.*[a-z])(?=.*[A-Z]).{5,30})"
  userform=this.formBuilder.group(
    {
      username:['', [Validators.required,Validators.minLength(5),Validators.maxLength(30) ]],
      password:['',[Validators.required,Validators.pattern(this.password)]],
      emailId:['',[Validators.required, Validators.pattern(this.emailPattern)]],
      organisationName:['',Validators.required],
      gstIN:['',[Validators.required,Validators.pattern(this.gstpattern)]],
      location:['',[Validators.required]],
      role:['']
      
    }
  )

  saveForm(){

    if(this.isShown==false){
      this.userform.value.role="User"
    }else{
      this.userform.value.role="Product owner"
    }
    // console.log('Form data is ', this.userform.value);
    this._registerService
    .register(this.userform.value)
    .subscribe((response) => {
      console.log(response);
      // alert("Registered successfully!");
      // alert("Please Login with the registered credientials! \n");
    },
    (err:HttpErrorResponse)=>{
      console.log(err);
    }
    );

  //for rabbit mq
    // console.log(this.userform.value);
      this._registerService
      .sendDataToUserService(this.userform.value)
      .subscribe((result) => {
        // console.log(result);
        alert(result.email);
      });


  }

  // hidden by default
  isShown: boolean = false ;
  toggleShow() {
  this.isShown = ! this.isShown;
  } 

}



  






/*
  submitForm() {
    console.log(this.userform.value);
    console.log(this.userform.status);
      this._registerService
      .sendDataToUserService(this.userform.value)
      .subscribe((result) => {
        console.log(result);
        alert(result.email);
      });
  }
*/






 




