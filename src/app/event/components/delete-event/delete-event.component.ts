import { Component, Input, Output, EventEmitter } from '@angular/core';
import { EventResponse } from '../../model/event-response.model';
import { EventService } from './../../services/event.service';


@Component({
  selector: 'app-delete-event',
  templateUrl: './delete-event.component.html',
  styleUrls: ['./delete-event.component.css']  
})
export class DeleteEventComponent { 
  @Input() event!: EventResponse;
  @Output() eventDeleted = new EventEmitter<number>();

  constructor(private eventService: EventService) {}

  confirmDelete(): void {
    const confirmation = confirm(`¿Seguro de que quieres borrar este evento ${this.event.title}?`);
    if (confirmation) {
      this.eventService.deleteEvent(this.event.id).subscribe(() => {
        this.eventDeleted.emit(this.event.id);
        window.location.reload(); // Recargar la página actual
      });
    }
  }
}







