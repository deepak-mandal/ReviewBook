import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  
  @Input() products: any[];
  constructor() {
    this.products=[];
   }

  ngOnInit(): void {
  }

}
