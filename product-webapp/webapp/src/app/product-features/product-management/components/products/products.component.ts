import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  @Input() products: any[];

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  onReview(productId: string) {
    this.router.navigateByUrl(`/review/${productId}`);
  }



}
