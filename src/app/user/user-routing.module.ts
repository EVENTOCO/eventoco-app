import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';

const routes: Routes = [
  { path: '', component: UserComponent },
  { path: 'details', component: UserComponent},
  { path: 'register', component: UserComponent},
  { path: 'edit', component: UserComponent},
  { path: 'login', component: UserComponent},
  { path: 'delete', component: UserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
