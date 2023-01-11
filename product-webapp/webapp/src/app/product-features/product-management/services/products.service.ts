import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {




  mainUrl = "http://localhost:8081/product/upload";
  getUrl = "http://localhost:8081/product/getAll";
  urlDelete: string = "http://localhost:8081/product/deleteExistingProduct";
  urlUpdate: string = "http://localhost:8081/product/modify";

  //to communicate between two URL
  constructor(private http: HttpClient) { }





  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.getUrl);
  }





  updateProduct(product: any, prodId) {
    return this.http.put(this.urlUpdate + "/" + prodId, product);    //two argument one for on which, other for 
  }



  deleteProduct(product: any) {
    return this.http.delete(this.urlDelete + "/" + product.productId);
  }


  createProducts(product: any) {
    return this.http.post(this.mainUrl, product);
  }

  getProductById(productId) {
    return this.http.get(this.mainUrl)
  }



}
