import { Injectable } from "@angular/core";
import {HttpClient } from '@angular/common/http';
import {  cardDetails, transaction } from "../app/dashboard/dashboard";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class DashboardService {
    baseURL : string = 'http://localhost:8085/finance/'
    constructor( private myhttp:HttpClient){

    }

    

    findTxnService(userId: number): Observable<transaction[]>{
        return this.myhttp.get<transaction[]>(this.baseURL+userId);
    }

    findCardDetail(userId: number): Observable<cardDetails>{
        return this.myhttp.get<cardDetails>(this.baseURL+"card/"+userId);

    }
}