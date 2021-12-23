import { Product_details } from "src/Product_details";
import { UserInformation } from "./UserInformation";

export class Transaction {
    emiPeriod: string;
    paid:number;
    processingFee:number;
    txnDate:Date;
    userInformation:UserInformation;
    productDetail:Product_details;
    txnStatus:String="Success";
  }
  