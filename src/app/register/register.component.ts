import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { LoginComponent } from '../login/login.component';
import { RegisterServiceService } from '../register-service.service';
import { Registration } from './Registration';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  //show hide div variables
  
  //Buttons clicks functionalities 
  constructor(private regService: RegisterServiceService) { }
  registerForm:FormGroup;
   register:Registration=new Registration();
  ngOnInit(): void {
    this.registerForm= new FormGroup({
      name:new FormControl('', [Validators.required, Validators.minLength(4),Validators.pattern(/^[a-zA-Z\s]*$/)]),
      //dob: new FormControl('', [Validators.required]),
      mobile: new FormControl('', [Validators.required, Validators.pattern(/^[789]\d{9}$/)]),
      username: new FormControl('', [Validators.required, Validators.minLength(4)]),
      email:new FormControl('', [Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]),
      password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]),
      address: new FormControl('',[Validators.required]),
      pincode: new FormControl('',[Validators.required, Validators.minLength(4)]),
      //cardType: new FormControl('',[Validators.required]),
      city:new FormControl('',[Validators.required]),
      state:new FormControl('',[Validators.required]),
      bankName: new FormControl('', [Validators.required, Validators.minLength(4), Validators.pattern(/^[a-zA-Z\s]*$/)]),
      bankNumber: new FormControl('', [Validators.required, Validators.pattern(/^\d{4,9}$/)]),
      ifsc: new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-z]{4}[a-zA-Z0-9]{2}$/)]),
      cb: new FormControl('', [Validators.requiredTrue]),
      card: new FormControl('', [Validators.required])


    },
    this.checkPasswords 
    );


  }
  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  checkPasswords: ValidatorFn = (group: AbstractControl):  ValidationErrors | null => { 
    let pass = group.get('password').value;
    let confirmPass = group.get('confirmPassword').value
    return pass === confirmPass ? null : { notSame: true }
  }

  registerUser()
  {
    console.log("Register "+this.register.accId);
    console.log("Name "+this.register.name);
    console.log("BankName "+this.register.bank);
    console.log("Username "+this.register.userName);
    console.log("City "+this.register.city);
    console.log("Card type "+this.register.cardType);
    console.log("ifsc code "+this.register.ifscCode);
    console.log("pincode "+this.register.pincode);
    console.log("password "+this.register.password);
    console.log("Email"+this.register.emailId);
    console.log("Joining date"+this.register.userJoiningDate);
    console.log("Address"+this.register.address);
    this.regService.insertRegisterService(this.register).subscribe((data: Registration) =>
  {

console.log('log is ' + data);

}, 
(err: string) => {
console.log(err + ' error ');
});

  }
  user_login()
  {
    
  }
  admin_login(){

  }
  
}
