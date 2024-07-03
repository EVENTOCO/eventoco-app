import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {LandingpageComponent} from "./landingpage/landingpage.component";
import {LoginUserComponent} from "../user/components/login-user/login-user/login-user.component";
import {ContainerComponent} from "./container/container.component";
import {RegisterUserComponent} from "../user/components/register-user/register-user.component";

const routes: Routes = [
  { path: '', component: LandingpageComponent, children: [
      { path: '', component: ContainerComponent },
      { path: 'login', component: LoginUserComponent },
      { path: 'register', component: RegisterUserComponent },
    ] },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class LandingpageRoutingModule { }
