import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
}) 
export class AuthService {

  
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();

  constructor(private apiService: ApiService) {
    const token = sessionStorage.getItem('authorization');
    this._isLoggedIn$.next(!!token);
  }

  login(data:any) {
    return this.apiService.login(data).pipe(
      tap((response: any) => {
        this._isLoggedIn$.next(true);
        sessionStorage.setItem('authorization', response.token);
      })
    );
  }

  getUserInfo(data:any) {
    return this.apiService.getUserInfo(data).pipe(
      tap((response: any) => {
        this._isLoggedIn$.next(true);
        sessionStorage.setItem('User Details', response);
        
      })
    );
  }

  
  
}
