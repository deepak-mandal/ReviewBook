import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private router:Router) { }

  Role=window.sessionStorage.getItem("role");

  isProductOwner:boolean=false;
  ngOnInit(): void {

    if(this.Role=="Product owner"){
      this.isProductOwner=true
    }
    
  }



  logout(){
    sessionStorage.removeItem('authorization');
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('role');
    this.router.navigate(['/login']).then(() => {
      window.location.reload();
    });
  }

}
