import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  _url = 'http://localhost:8082/api/v1/register';
  rabbitUrl = 'http://localhost:8082/api/v1/user';
  url= 'http://localhost:8082/api/v1/user';
  __url = 'http://localhost:8082/api/v1';

  constructor(private httpClient: HttpClient) { }
/*
  register(userData){
    return this.httpClient.post<any>(this._url,userData);
  }*/

  register(data:any):Observable<any>{
    return this.httpClient.post(this._url, data);
  }
  //for rabbit mq
  sendDataToUserService(data:any):Observable<any>{
    return this.httpClient.post(this.rabbitUrl, data);
  }
  getCurrentData(username){
    return this.httpClient.get(`${this.__url}/${username}`)
  }

  updateProfile(username,data){
    return this.httpClient.put(`${this.url}/${username}`,data)
  }

}
