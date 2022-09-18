import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  rating_url = 'http://localhost:8081/product/rate'

  constructor(private http: HttpClient) { }

  rateTheProduct(username: string, rating: number, productId: string  ){
    return this.http.post<any>(this.rating_url,{"username":username, "rating":rating, "productId":productId});
  }
}
