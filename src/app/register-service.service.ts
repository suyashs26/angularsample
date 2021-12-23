import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Registration } from './register/Registration';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {

  baseUrl:string='http://localhost:8085/finance/';
  //user_id:number=1234;
  //product_id:number=20047;
  constructor(private myhttp: HttpClient) { }
    insertRegisterService(register:Object) : Observable<Object> {
      //console.log("Insert transaction service is called..."+txn.emiPeriod)
      return this.myhttp.post(this.baseUrl+"addUser/",register);
  }
 
 
}