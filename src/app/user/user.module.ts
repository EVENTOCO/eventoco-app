import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { PasswordStrengthDirective } from './directives/password-strength.directive';
import { RegisterUserComponent } from './components/register-user/register-user.component';


@NgModule({
  declarations: [
    UserComponent,
    PasswordStrengthDirective,
    RegisterUserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
  ]
})
export class UserModule { }
