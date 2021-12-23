import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DashboardService } from '../dashboard.service';
import { cardDetails } from '../dashboard/dashboard';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _route:Router,private route: ActivatedRoute,private txnService: DashboardService) { }
  id:number;
  isLogged: boolean;
  isPresent: boolean;
  userDetails: cardDetails;
  


  ngOnInit(): void {

   
    this.isPresent = this.toggle();
    console.log("navbar "+this.isPresent);
    console.log("length"+ sessionStorage.length);
   
    
  }

  toggle(){
    if(sessionStorage.length>0){
      return this.isLogged=true;


    }
    else{
      return this.isLogged=false;
    }
  }
  logOut(){
    sessionStorage.removeItem('user');
    this._route.navigate(['/login'])
          .then(() => {
            window.location.reload();
          });
  }

  


}
