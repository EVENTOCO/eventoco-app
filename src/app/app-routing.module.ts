import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
  { path: 'event', loadChildren: () => import('./event/event.module').then(m => m.EventModule) },
  { path: 'coment', loadChildren: () => import('./coment/coment.module').then(m => m.ComentModule) },
  { path: 'wellcome', loadChildren: () => import('./landingpage/landingpage.module').then(m => m.LandingpageModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
