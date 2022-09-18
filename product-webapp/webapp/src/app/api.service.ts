import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  loginUrl="http://localhost:8080/login";

  userDetailsUrl ="http://localhost:8080/api/user"

  constructor(private http:HttpClient) { }


  login(data: any):Observable<any>{
    return this.http.post(this.loginUrl, data);
  }


  getUserInfo(un):Observable<any>{
    return this.http.get(this.userDetailsUrl+"/"+un);
  }

}
