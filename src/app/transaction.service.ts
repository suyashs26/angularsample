import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product_details } from 'src/Product_details';
import { cardDetails } from './dashboard/dashboard';
import { Transaction } from './Transaction';
@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  baseUrl:string='http://localhost:8085/finance/';
  //user_id:number=1234;
  //product_id:number=20047;
  constructor(private myhttp: HttpClient) { }
    insertTransactionService(txn:Object,user_id:number,product_id:number) : Observable<Object> {
      //console.log("Insert transaction service is called..."+txn.emiPeriod)
      return this.myhttp.put(this.baseUrl+"insertTxn/"+user_id+"/"+product_id,txn);
  }
 
  getTransactionListService(user_id:number,product_id:number):Observable<Transaction[]>
  {
    return this.myhttp.get<Transaction[]>(this.baseUrl+"getAllTxns/"+user_id+"/"+product_id);
  }
  getProductService(product_id:number):Observable<Product_details>
  {
    return this.myhttp.get<Product_details>(this.baseUrl+"getProductbyId/"+product_id);
  }
  findCardDetail(userId: number): Observable<cardDetails>{
    return this.myhttp.get<cardDetails>(this.baseUrl+"card/"+userId);

}
}
