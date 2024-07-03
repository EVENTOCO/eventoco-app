import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ContainerComponent } from './container/container.component';
import { FooterComponent } from './footer/footer.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { LandingpageRoutingModule } from './landingpage-routing.module';



@NgModule({
  declarations: [
    NavbarComponent,
    ContainerComponent,
    FooterComponent,
    LandingpageComponent
  ],
  imports: [
    CommonModule,
    LandingpageRoutingModule
  ],
  exports: [
    NavbarComponent,
    ContainerComponent,
    FooterComponent,
    LandingpageComponent
  ]
})
export class LandingpageModule { }
