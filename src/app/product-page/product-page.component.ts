import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouteConfigLoadEnd } from '@angular/router';
import { Product_details } from 'src/Product_details';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
 /* products:Product[]=[{imgName:'assets/Laptop.jfif',productName:'Hp Laptop',productDescription:'Electronics',Cost:40000},
  {imgName:'assets/mobilephone.jfif',productName:'Samsung MobilePhone',productDescription:'Electronics',Cost:20000},
  {imgName:'assets/apartment.jfif',productName:'Apartment',productDescription:'Housing',Cost:10000000},
  {imgName:'assets/earphone.png',productName:'Boat Earphone',productDescription:'Electronics',Cost:2000},
  {imgName:'assets/car.jfif',productName:'Audi car',productDescription:'Automobiles',Cost:780000},
  {imgName:'assets/iphone12.jfif',productName:'iphone12',productDescription:'Electronics',Cost:120000},
  {imgName:'assets/LgFridge.jfif',productName:'LG Fridge',productDescription:'Electronicss',Cost:1650000},
  {imgName:'assets/bmw.jfif',productName:'BMW car',productDescription:'Automobiles',Cost:25000000},
  {imgName:'assets/bandraapts.jfif',productName:'Bandra Apartment',productDescription:'Housing',Cost:28000000},
  {imgName:'assets/airpurifier.jfif',productName:'Air purfier',productDescription:'Electronics',Cost:80000},
  {imgName:'assets/blender.jfif',productName:'Philips Blender',productDescription:'Electronics',Cost:8000},]*/
  products:Product_details[]=[];
  user_id:number;
  constructor(private prdctService: ProductServiceService ,private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.user_id = params['id1'];
    });
    this.prdctService.findAllEmployeeService().subscribe(
      (data: Product_details[])=>
      {
        this.products = data;
       // this.tempEmployees=data; //copied into a temp array also
       console.log(data);
      },
      (err)=>{
        console.log(err);
      }
    )
    
  };
 
}
class ProductImage{

  ImgUrl:string;
}
