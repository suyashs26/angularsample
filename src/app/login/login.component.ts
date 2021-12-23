import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../login.service';
import { Login, LoginDto } from './login';

import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService,  private _router : Router) { }
  loginForm:FormGroup;

  user = new Login();
  userName: number;
  password: string = "";
  msg:string="";
  userCred: LoginDto;
  isLoggedIn: boolean=false;


 


  ngOnInit(): void {
    this.loginForm= new FormGroup({
      email:new FormControl('', [Validators.required, Validators.pattern(/^[0-9]*$/)]),
      password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/)])

    });
   //this.loginUser();
  //  if(parseInt(sessionStorage.getItem('user'))>0)
  //     {
  //       alert("Already Logged In");
  //       this._router.navigate(['/dashboard',9822]);
  //     }
   console.log(this.isLoggedIn);
  // console.log("CRED " + this.userCred);
  
  //let item = JSON.parse(localStorage.getItem("user"));
  //console.log(item);
    


   
  


  }
  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  submitLogin(form:FormGroup){
    console.log(form.valid);
    console.log("email ", form.value.email);
    console.log("password ",form.value.password);
  }
  user_register(){}
  admin_login(){
    this._router.navigate(['/admin-login']);
  }

  loginUser(){
    this.loginService.loginUser(this.user).subscribe(
      (data: LoginDto)=> {
        console.log("response recd");
        this.userCred = data;
        sessionStorage.setItem('user',JSON.stringify(this.userCred));
        //console.log("1");
         console.log(this.userCred)
        //console.log("3");
        //console.log(data.userInformation.userId);
        //this._router.navigate(['/dashboard',data.userInformation.userId]);
        this._router.navigate(['/dashboard',data.userInformation.userId])
          .then(() => {
            window.location.reload();
          });
        
        //this._router.navigate(['/dashboard',data.userInformation.userId]);
        //window.location.reload();
        //alert("logged in");
        //this._router.navigate(['/dashboard',data.userInformation.userId]);
        this.isLoggedIn=true;
      },
      error => { 
        console.log("error occured");
        this.isLoggedIn=false;
        alert("Wrong Credentials or User not Found");
        //this._router.navigate(['/login']);
        
      }
      
      
    )
  }
 
 


}



