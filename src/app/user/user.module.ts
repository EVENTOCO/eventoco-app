import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { UserDetailsComponent } from './components/user-details/user-details/user-details.component';
import { EditUserComponent } from './components/edit-user/edit-user/edit-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../material/material.module';
import { DeleteUserComponent } from './components/delete-user/delete-user/delete-user.component';
import { LoginUserComponent } from './components/login-user/login-user/login-user.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    UserComponent,
    RegisterUserComponent,
    UserDetailsComponent,
    EditUserComponent,
    DeleteUserComponent,
    LoginUserComponent
  ],
  imports: [
     CommonModule,
     UserRoutingModule,
     FormsModule,
     MaterialModule,
     ReactiveFormsModule,
     HttpClientModule
  ]
})
export class UserModule { }
