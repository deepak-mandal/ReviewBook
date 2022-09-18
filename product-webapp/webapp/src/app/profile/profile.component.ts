import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../register.service';
import {MatSnackBar} from '@angular/material/snack-bar';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  res="updated sucessfully";

  alert:boolean=false;
  gstpattern = "^([0][1-9]|[1-2][0-9]|[3][0-7])([a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}[1-9a-zA-Z]{1}[zZ]{1}[0-9a-zA-Z]{1})+$";
  // editProfile = new FormGroup({});
  editProfile=new FormGroup({
    username:new FormControl(''),
    password:new FormControl('',Validators.required),
    emailId:new FormControl(''),
    organisationName:new FormControl('',Validators.required),
    gstIN:new FormControl('',[Validators.required,Validators.pattern(this.gstpattern)]),
    location:new FormControl('',[Validators.required]),
    role:new FormControl(''),
  })

  constructor(
   private update:RegisterService , private _snackBar: MatSnackBar

  ) { }

  ngOnInit():void {
    this.update.getCurrentData(this.presentUser).subscribe((result)=>
    {
      // console.log(result);
      this.editProfile=new FormGroup({
        username:new FormControl(result['username']),
        password:new FormControl(result['password']),
        emailId:new FormControl(result['emailId']),
        organisationName:new FormControl(result['organisationName']),
        gstIN:new FormControl(result['gstIN']),
        location:new FormControl(result['location']),
        role:new FormControl(result['role'])
    })      
})
}
// presentUser='vikashowner'
presentUser=window.sessionStorage.getItem("username")

updateProfile(){

  this._snackBar.open(this.res.toString(),'',{
    duration: 3000,
    verticalPosition:'top'
  }
  );

  // console.log('updated data',this.editProfile.value)
  this.update.updateProfile(this.presentUser,this.editProfile.value)
    .subscribe((result)=>{
      // console.log(result,"data updated succesfully")
    })
}
}












// name="aman"
  // ngOnInit(): void {
  //   this.getprofile();
    
  // }

  // getprofile(){
  //   this.client.get<any>('').subscribe(
  //   response => {
  //     console.log(response);
  //     this.users = response;
  //   }
  //   );
  // }

    