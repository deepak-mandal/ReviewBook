import { Component, OnInit } from '@angular/core';
import { AllProductService } from 'src/app/SERVICE/all-product.service';
import { RecommendedProductService } from 'src/app/SERVICE/recommended-product.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  items: any[];
  recommendedItems: any[];
  
  constructor(private allProduct: AllProductService, private recommendeProducts:RecommendedProductService) { 
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

  getRecommendedProducts(){
    this.recommendeProducts.getRecommendedProducts().subscribe(resp=>{
      this.recommendedItems=resp;
    })
  }

}
