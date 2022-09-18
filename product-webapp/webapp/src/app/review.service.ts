import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Like } from './models/like';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  
  url='http://localhost:8084/review/add';
  _url='http://localhost:8084/review/product';
  url_='http://localhost:8084/review/';


  constructor(private httpClient: HttpClient) { }

  sendreview(data:any):Observable<any>{
    return this.httpClient.post(this.url, data);
  }
  
  // getProducts():Observable<any[]>{
  //   return this.httpClient.get<any[]>(this._url);
  // }
  getProducts(productId){
    return this.httpClient.get(`${this._url}/${productId}`)
  }

  getdata(productId){
    return this.httpClient.get(`${this._url}/${productId}`)
  }
  LikeService(l : Like){
    this.httpClient.post(this.url_+"like", l);
  }
  UnlikeService(l : Like){
    this.httpClient.post(this.url_+"unlike", l);
  }

}
