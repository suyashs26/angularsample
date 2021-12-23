import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product_details } from 'src/Product_details';
import { DashboardService } from '../dashboard.service';
import { cardDetails, transaction } from './dashboard';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  userId: number;
  allTransactions: transaction[] = [] ;
  allCardDetails:cardDetails;
  creditUsed:number;
  creditRem: number;
   products:Product_details;
  constructor(private txnService: DashboardService, private route: ActivatedRoute, private _route:Router) { }

  

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.userId = params['id'];
    });
    console.log('ngOnInit called....');
     
    
    this.loadAllTxns(this.userId);
    this.loadCardDetails(this.userId);
     

    // let sum: number = 0;
    // this.allTransactions.forEach(a => sum += a.paid);
    // console.log(sum );
    //console.log(this.allCardDetails);

    // let sum: number = 0;
    // this.allTransactions.forEach(a => sum += a.paid);
    // console.log(sum);
   // this.allTransactions.reduce((accumulator, current) => accumulator + current.paid, 0);
  
    
    
  }

  loadAllTxns(userId: number) {
    console.log('Load all txns');
    this.txnService.findTxnService(userId).subscribe(
      (data: transaction[])=> 
      {
        this.allTransactions = data;
        console.log(data);
        
        let sum =0;
        this.allTransactions.forEach(a => sum += a.paid); 
               
        console.log('Total paid:', sum);
        this.creditUsed=sum;
        //this.creditUsed = this.creditUsed+this.products.cost; 
        let titleproperty =  this.allCardDetails.cardLimit;
        //let titleproperty=3000;
        //this.creditRem = titleproperty - sum;

        console.log(this.creditRem);
        //console.log(this.allCardDetails);
       // this.tempEmployees = data; //copied into a temp array also
      }, 
      (err) => {
        console.log(err);
      }
    ); // invocation of the subscribe method
  }

  loadCardDetails(userId: number){
    console.log('Load card  details');
    this.txnService.findCardDetail(userId).subscribe(
      (data: cardDetails) => 
      {
        this.allCardDetails = data;
        //alert("Card limit is"+this.allCardDetails.cardLimit);
        //console.log(this.allCardToList);
      
        //console.log(this.allCardDetails);
    


       // this.tempEmployees = data; //copied into a temp array also
      }, 
      (err) => {
        console.log(err);
      }
    ); //

  }

  safetyCheck(fn:any){
    try{
      return fn()
    }
    catch(e)
    {
      return undefined;
    }

  }

  
 
  

}
