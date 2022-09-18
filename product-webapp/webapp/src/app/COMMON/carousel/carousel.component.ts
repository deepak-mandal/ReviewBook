import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  @Input() products: any[];
  constructor() {
    this.products=[];
   }

  ngOnInit(): void {
  }

}
