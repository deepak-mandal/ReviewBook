import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {



  @Input() products: any[];

  rating = [0, 1, 2, 3, 5]

  constructor(private router: Router) {
    this.products = [];
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

  showIcon(r: number, i: number) {
    if (r == 0) {
      return 'star_border';
    }
    else if (r >= i) {
      return 'star';
    }
    else return 'star_border';
  }
}
