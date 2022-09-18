import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecommendedProductService {

  private Url="http://localhost:7687/recommend";
  constructor(private Http: HttpClient) { }

  getRecommendedProducts():Observable<any>{
    return this.Http.get(this.Url)
  }
}
