import { Component, OnInit } from '@angular/core';
import { AllProductService } from 'src/app/product-features/reviewbook-home/services/all-product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

 
  items: any[];
  recommendedItems: any[];
  
  constructor(private allProduct: AllProductService, ) { 
    this.items=[];
  }

  ngOnInit(): void {
    this.getProducts()
  }
  getProducts(){
    this.allProduct.getAllProducts().subscribe(resp=>{
      this.items=resp;
    })
  }

  // getRecommendedProducts(){
  //   this.recommendeProducts.getRecommendedProducts().subscribe(resp=>{
  //     this.recommendedItems=resp;
  //   })
  // }


}
