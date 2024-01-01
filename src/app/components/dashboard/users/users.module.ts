import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailUserComponent } from './detail-user/detail-user.component';
import { MaterialModule } from 'src/app/material/material.module';
import { UsersRoutingModule } from './users-routing.module';
import { AddUserComponent } from './add-user/add-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
  declarations: [
    AddUserComponent,
    DetailUserComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    // MatFormFieldModule,
    ReactiveFormsModule,
    UsersRoutingModule,
  ]
})
export class UsersModule { }
