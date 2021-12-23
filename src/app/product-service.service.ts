import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product_details } from 'src/Product_details';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  baseURL: string = 'http://localhost:8085/finance/' //Spring's EmployeeJPAController 
  
  constructor(private myhttp: HttpClient) { }

  findAllEmployeeService() : Observable<Product_details[]> {
      return this.myhttp.get<Product_details[]>(this.baseURL+"getAllProducts/");
  }
}
