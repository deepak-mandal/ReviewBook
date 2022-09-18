import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() products: any[];
  
  rating =[0,1,2,3,5]

  constructor(private router: Router) { 
    this.products=[];
    console.log("product details:", this.products);

  }

  ngOnInit(): void {
    console.log("product details:", this.products);
    console.log(this.rating)
  }

  getReview(productId) {
    console.log("selected productId:", productId);
    this.router.navigateByUrl(`/review/${productId}`);
  }

  showIcon(r:number, i:number ){
    if(r==0){
      return 'star_border';
    }
    else if(r>=i){
      return 'star';
    }
    else return 'star_border';
  }
}
