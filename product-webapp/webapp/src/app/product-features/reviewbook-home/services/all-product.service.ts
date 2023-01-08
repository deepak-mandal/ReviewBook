import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllProductService {

  private Url="http://localhost:8081/product/all";
  constructor(private Http: HttpClient) {  }

  getAllProducts():Observable<any>{
    return this.Http.get(this.Url)
  }
}
