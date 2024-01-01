import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
import { AddPostComponent } from './posts/add-post/add-post.component';
import { UsersComponent } from './users/users/users.component';
// import { AddUserComponent } from './users/add-user/add-user.component';
// import { DetailUserComponent } from './users/detail-user/detail-user.component';



@NgModule({
  declarations: [
  LayoutComponent,
  AddPostComponent,
  UsersComponent,
  // AddUserComponent,
  // DetailUserComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    DashboardRoutingModule,

  ]
})
export class DashboardModule { }
