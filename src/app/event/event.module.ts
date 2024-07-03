import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventRoutingModule } from './event-routing.module';
import { EventComponent } from './event.component';
import { CreateEventComponent } from './components/create-event/create-event.component';
import { SeeTutorialComponent } from './components/see-tutorial/see-tutorial.component';
import { DeleteEventComponent } from './components/delete-event/delete-event.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EventComponent,
    DeleteEventComponent,
    CreateEventComponent
  ],
  imports: [
    CommonModule,
    EventRoutingModule,
    FormsModule,
     MaterialModule,
     ReactiveFormsModule,
     HttpClientModule
  ]
})
export class EventModule { }
