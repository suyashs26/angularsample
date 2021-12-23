import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User_Information } from './admin-page/Admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  baseURL: string = 'http://localhost:8086/finance/'

  constructor(private myhttp: HttpClient) { }

  findAllUsersService() : Observable<User_Information[]>{
    return this.myhttp.get<User_Information[]>(this.baseURL+"getAllUsers/");
  }
  deleteUserService(userId: number) : Observable<User_Information[]>{
    return this.myhttp.get<User_Information[]>(this.baseURL+"deleteUser/"+userId);
  }
}
