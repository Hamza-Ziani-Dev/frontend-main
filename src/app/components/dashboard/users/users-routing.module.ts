import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DetailUserComponent } from './detail-user/detail-user.component';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './add-user/add-user.component';

const routes: Routes = [
  { path: 'detail-user/:id', component: DetailUserComponent,},
  { path: 'add-user', component: AddUserComponent,},
  {
    path:'',component:UsersComponent,
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes),CommonModule],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
