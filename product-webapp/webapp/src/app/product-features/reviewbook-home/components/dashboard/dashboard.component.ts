import { Component, OnInit } from '@angular/core';
import { AllProductService } from 'src/app/product-features/reviewbook-home/services/all-product.service';
import {ChangeDetectionStrategy, Input} from "@angular/core";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {

 
  items: any[];
  // recommendedItems: any[];
  // totalRecords:number
  constructor(private allProduct: AllProductService, ) { 
    this.items=[];
  }

  ngOnInit(): void {
    this.getProducts()
  }
  getProducts(){
    this.allProduct.getAllProducts().subscribe(resp=>{
      this.items=resp;
      // console.log(this.items)
      // this.totalRecords=this.items.length;
    })
  }

  // getRecommendedProducts(){
  //   this.recommendeProducts.getRecommendedProducts().subscribe(resp=>{
  //     this.recommendedItems=resp;
  //   })
  // }

  handlePageEvent(pageData: any){
    console.log("**")
    console.log(pageData)
    console.log("**")
  }



}
