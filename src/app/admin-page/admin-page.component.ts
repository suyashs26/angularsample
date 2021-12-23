import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { User_Information } from './Admin';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  userid: number = 0;
  allUsers: User_Information[] = [];
  tempUsers: User_Information[] = [];


  constructor(private adminservice: AdminService) { }

  ngOnInit(): void {
    console.log('ngOnInit() called...');
    this.loadAllUsers();
  }
  loadAllUsers(){
    console.groupCollapsed("load all employees()...");
    this.adminservice.findAllUsersService().subscribe(
      (data: User_Information[])=>{
        this.allUsers = data;
        this.tempUsers = data;
        console.log(data);
      },
      (err)=>{
        console.log(err);
      }
    );
  }

  updateUserArray(){
    if(this.userid == 0){
      console.log('its zero' + this.userid);
      this.tempUsers = this.allUsers;
    }
    else{
      console.log('its NOT zero' + this.userid);
      this.tempUsers = this.allUsers.filter(e=>(e.userId == this.userid));
      console.log('length of tempEmployees : '+this.tempUsers.length);
      console.log('length of allEmployees : '+this.allUsers.length);
    }
  }

  xdata: any;
  deleted: Boolean;
  deleteEmployee(eno: number){
    console.log('emp number to delete '+eno);
    this.adminservice.deleteUserService(eno).
    subscribe((data:any) =>{
      this.xdata = data;
      console.log('log is' + data);
      if(data == null ) {
        this.deleted=true;
        alert('record has been deleted');
        this.tempUsers = this.allUsers.filter(e=>(e.userId != eno));
        console.log('from deleteEmployee() '+ data);
        console.log(this.tempUsers);
        this.allUsers = this.tempUsers;
        console.log('Employee deleted '+eno);
        }
      },
      (err) => {
      console.log(err + ' error '+this.xdata);
      }
    );
  // if(this.deleted) {
  //}
  //this.loadAllEmployees();
  //window.location.reload();
  }

}


