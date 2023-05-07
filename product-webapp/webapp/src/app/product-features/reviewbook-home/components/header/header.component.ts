import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  
  // @Input() products: any[];
  // constructor(private router: Router) {
  //   this.products=[];
  //  }

  // ngOnInit(): void {
  // }

  // onClickImg(event){
  //   console.log(event)
  //   this.router.navigateByUrl(`/review/${event.productId}`);
  // }
}
