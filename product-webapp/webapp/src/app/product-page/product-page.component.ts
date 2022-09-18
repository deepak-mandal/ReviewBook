import { Component, OnInit } from '@angular/core';
import { NewProductService } from '../SERVICE/new-product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  constructor(private productsService:NewProductService) { }

 





  allProduct: any;


  ngOnInit(): void {
    this.getPhotos();
  }
  getPhotos() {
    this.productsService
    .getAllProducts()
    .subscribe(
      (data) =>  {
        this.allProduct = data;
        console.log("all product:", this.allProduct);
        console.log(typeof this.allProduct)
  
      }
    )
  
  
  
  }
  
  






}
