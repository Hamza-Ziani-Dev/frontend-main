import { Component } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
users : any = [];
  constructor( private usersService : UsersService){}


  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(){
    this.usersService.getAllUsers().subscribe((res)=>{
      // console.log("Get all users response", res);
      this.users = res;
    })
  }

}
