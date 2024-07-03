import { EventResponse } from '../event/model/event-response.model';
import { EventService } from './services/event.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrl: './event.component.css'
})
export class EventComponent {

  event!: EventResponse;
  isCreateEventVisible = false;
  isSeeTutorialVisible = false;

  constructor(private eventService: EventService){}
    
  ngOnInit(): void {
    const eventId = localStorage.getItem('eventId');
    if (eventId) {
      this.eventService.getEventById(+eventId).subscribe(event => {
        this.event = event;
      });
    }
  }

  toggleCreateEventForm(): void {
    this.isCreateEventVisible = !this.isCreateEventVisible;
  }

  toggleSeeTutorial(): void {
    this.isSeeTutorialVisible = !this.isSeeTutorialVisible;
  }

  onEventDeleted(eventId: number): void {
    // Lógica para manejar el evento eliminado, por ejemplo, refrescar la lista de eventos
    this.event = null!;
    this.eventService.deleteEvent(eventId).subscribe(() => {
      console.log(`Event with ID ${eventId} has been deleted.`);
      localStorage.removeItem('eventId');
    });
  
  }
}
