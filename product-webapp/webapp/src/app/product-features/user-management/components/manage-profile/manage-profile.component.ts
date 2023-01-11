import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RegisterService } from '../../services/register.service';
@Component({
  selector: 'app-manage-profile',
  templateUrl: './manage-profile.component.html',
  styleUrls: ['./manage-profile.component.scss']
})
export class ManageProfileComponent implements OnInit {

  res = "updated sucessfully";
  hide = true;
  alert: boolean = false;
  gstpattern = "^([0][1-9]|[1-2][0-9]|[3][0-7])([a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}[1-9a-zA-Z]{1}[zZ]{1}[0-9a-zA-Z]{1})+$";
  editProfile = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('', Validators.required),
    emailId: new FormControl('', [Validators.email, Validators.email, Validators.minLength(2)]),
    organisationName: new FormControl('', Validators.required),
    gstIN: new FormControl('', [Validators.required, Validators.pattern(this.gstpattern)]),
    location: new FormControl('', [Validators.required]),
    role: new FormControl(''),
  })

  constructor(
    private update: RegisterService, private _snackBar: MatSnackBar

  ) { }

  ngOnInit(): void {
    this.getProfileDetails()
  }

  getProfileDetails() {
    this.update.getCurrentData(this.presentUser).subscribe((result) => {
      this.editProfile = new FormGroup({
        username: new FormControl(result['username']),
        password: new FormControl(result['password']),
        emailId: new FormControl(result['emailId']),
        organisationName: new FormControl(result['organisationName']),
        gstIN: new FormControl(result['gstIN']),
        location: new FormControl(result['location']),
        role: new FormControl(result['role'])
      })
    })
  }
  presentUser = window.sessionStorage.getItem("username")

  updateProfile() {
    this.update.updateProfile(this.presentUser, this.editProfile.value)
      .subscribe((result) => {
        if (!!result) {
          this._snackBar.open(this.res.toString(), '', {
            duration: 3000,
            verticalPosition: 'bottom'
          }
          );
          this.getProfileDetails();
        }
      })
  }

  getErrorMessage() {
    if (this.editProfile.get('emailId').hasError('required')) {
      return 'You must enter a value';
    }
    return this.editProfile.get('emailId').hasError('email') ? 'Not a valid email' : '';
  }

}
