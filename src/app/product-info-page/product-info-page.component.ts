import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service';
import { Transaction } from '../Transaction';
import { UserInformation } from '../UserInformation';
import { Product_details } from 'src/Product_details';
import { ActivatedRoute, Router } from '@angular/router';
import { cardDetails } from '../dashboard/dashboard';
@Component({
  selector: 'app-product-info-page',
  templateUrl: './product-info-page.component.html',
  styleUrls: ['./product-info-page.component.css'],
})
export class ProductInfoPageComponent implements OnInit {
 
  
 
  selectedEmi:string;
  num:number;
  paidValue:number=0;
  usersEmiPeriod:string;
  toPay:number;
  completePayment:boolean;
  emi1:String[]=['3 MONTHS','6 MONTHS','9 MONTHS','12 MONTHS'];
  xdata: Transaction;
  myDate=new Date();
  txnArr:Transaction[]=[];
  product_id:number;
  products:Product_details;
  user_id:number;
  serId: number;
  allTransactions: Transaction[] = [] ;
  allCardDetails:cardDetails;
  creditUsed:number;
  creditRem: number=0;
  constructor(private txnService: TransactionService, private route: ActivatedRoute,private router:Router) { 
    
  }
  
  txn:Transaction=new Transaction();
  user:UserInformation=new UserInformation();

  ngOnInit(): void {
 
    this.route.params.subscribe(params => {
      this.user_id = params['id1'];
    });
    this.route.params.subscribe(params => {
      this.product_id = params['id'];
    });
    console.log('ngOnInit called....'+this.user_id);
    this.getProduct();
    this.getTransactionList();
  }
  selectEmi()
  {
    
    if(this.selectedEmi=='3 MONTHS')
    this.num=3;
    else if(this.selectedEmi=='6 MONTHS')
    this.num=6;
    else if(this.selectedEmi=='9 MONTHS')
    this.num=9;
    else if(this.selectedEmi=='12 MONTHS')
    this.num=12;
    this.toPay=this.products.cost/this.num;
    if(this.paidValue>=this.products.cost)
    {
     this.completePayment=true;
    }
    console.log(this.selectedEmi);
  }
  payment()
  {
    this.txn.emiPeriod=this.selectedEmi;
    
    this.txn.processingFee=10;
    this.txn.txnDate=this.myDate;
    this.txn.paid=this.toPay;
    console.log("users emi period is "+this.usersEmiPeriod);
    console.log("PaidValue is "+this.paidValue);
    if(this.creditUsed<=this.products.cost)
  {
      alert("Card limit is exceeded");
      this.txn.txnStatus="failure"
  }
  else
  {
    this.insertTransaction();
    alert("Payment is done");
    
  }    
    this.getTransactionList();
  
    this.router.navigate(['/dashboard',this.user_id])
    
  }
  getProduct()
  {
  this.txnService.getProductService(this.product_id).subscribe(
    (data: Product_details)=>
    {
      this.products = data;
     console.log(this.products.product_id);
       
    },
    (err: any)=>{
      console.log(err);
    }
  );}
  getTransactionList()
  {
  this.txnService.getTransactionListService(this.user_id,this.product_id).subscribe(
    (data: Transaction[])=>
    {
      this.txnArr = data;
      let paidAmount=0;
      this.txnArr.forEach(a => paidAmount += a.paid);
      
      console.log(this.paidValue);
      this.paidValue=paidAmount;
      this.txnArr.forEach(a => this.usersEmiPeriod=a.emiPeriod)
      if(this.usersEmiPeriod!=null)
      {
      this.emi1=[this.usersEmiPeriod];
      }
      else
      {
       this.creditUsed=this.creditUsed+this.paidValue;
       this.creditRem=this.allCardDetails.cardLimit-this.creditUsed;
      }
    if(this.paidValue+this.txn.paid>=this.products.cost)
    {
     this.completePayment=true;
    }
       
    },
    (err: any)=>{
      console.log(err);
    }
  );
}
loadCardDetails(userId: number){
  console.log('Load card  details');
  this.txnService.findCardDetail(userId).subscribe(
    (data: cardDetails) => 
    {
      this.allCardDetails = data;
      //console.log(this.allCardToList);
    
      //console.log(this.allCardDetails);
  


     // this.tempEmployees = data; //copied into a temp array also
    }, 
    (err) => {
      console.log(err);
    }
  ); //

}

insertTransaction()
{
  
 this.emi1=[this.selectedEmi]; 
console.log('Inserting Processing_fee.... '+this.txn.processingFee);
this.txnService.insertTransactionService(this.txn,this.user_id,this.product_id).subscribe((data: string) =>
{

console.log('log is ' + data);

}, 
(err: string) => {
console.log(err + ' error '+this.xdata);
});
}
}

