export class transaction {
    txnId: number;
    paid: number;
    txnDate: Date;
    txnStatus: String;
    productDetail: product_details;

}
 export interface product_details {
    product_name: string;
     cost:number;
 }

export class cardDetails {
    cardNumber: number;
    cardType: string;
    validity: Date;
    cardLimit: number;
    userInformation: userInformation;
}

export interface userInformation {
    name:string;
}

