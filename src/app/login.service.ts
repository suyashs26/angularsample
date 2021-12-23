import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Login, LoginDto } from './login/login';
import { Observable } from 'rxjs';
// import { LoginDto } from './login.dto';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  public loginUser(user: Login):Observable<LoginDto> {
      return this.http.post<LoginDto>("http://localhost:8085/finance/login",user);
    }

}  
    