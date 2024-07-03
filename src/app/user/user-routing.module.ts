import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import {UserDetailsComponent} from "./components/user-details/user-details/user-details.component";
import {RegisterUserComponent} from "./components/register-user/register-user.component";
import {EditUserComponent} from "./components/edit-user/edit-user/edit-user.component";
import {LoginUserComponent} from "./components/login-user/login-user/login-user.component";
import {DeleteUserComponent} from "./components/delete-user/delete-user/delete-user.component";

const routes: Routes = [
  { path: '', component: UserComponent },
  { path: 'details', component: UserDetailsComponent},
  { path: 'register', component: RegisterUserComponent},
  { path: 'edit', component: EditUserComponent},
  { path: 'login', component: LoginUserComponent},
  { path: 'delete', component: DeleteUserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
