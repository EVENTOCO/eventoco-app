import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComentComponent } from "./coment.component";
import { ComentRoutingModule } from './coment-routing.module';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ComentComponent
  ],
    imports: [
        ComentRoutingModule,
        FormsModule
    ]
})
export class ComentModule { }
