import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { NgxSpinnerComponent } from 'ngx-spinner';
import { UsersService } from '../users.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

constructor(
  private usersService : UsersService,
  private fb:FormBuilder,
  private spinner : NgxSpinnerService,
  private toaster:ToastrService,
  private router:Router,
  ){}

ngOnInit(): void {
  this.createForm();
  
}
addUserForm!:FormGroup;

createForm() {
  this.addUserForm = this.fb.group({
    username:['' , [Validators.required] ],
    email:['' , [Validators.required] ],
    password:['' , [Validators.required ]],
    // profilePhoto:['' , [Validators.required ]],
    // isAdmin:['' , [Validators.required  ] ],
  })
}



AddUser() {
  this.spinner.show();
  this.usersService.addUser(this.addUserForm.value).subscribe((res:any)=>{
    localStorage.setItem("token" , res.token)
    this.toaster.success("Success" , "Add Users Success")
    this.router.navigate(['/users']);
    this.spinner.hide();
  });
}
}
