import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'
import { EventService } from '../../services/event.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css'] // Corrección aquí
})
export class CreateEventComponent {
  eventForm: FormGroup;
  isFormVisible = false;

  constructor(private fb: FormBuilder, private eventService: EventService) {
    this.eventForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(25)]],
      date: ['', Validators.required],
      place: ['', Validators.required],
      description: ['', Validators.required],
      descriptionService: [''], // Ajuste del nombre
      tag: [''], // Ajuste del nombre
      isImportant: [''], // Ajuste del nombre
      aproxNumParticipants: [''] // Ajuste del nombre 
    });
  }

  toggleFormVisibility(): void {
    this.isFormVisible = !this.isFormVisible;
  }

  onSubmit(): void {
    console.log(this.eventForm.value)
     if (this.eventForm.valid) {
       const newEvent = this.eventForm.value;
       this.eventService.createEvent(newEvent).subscribe(
         () => {
           console.log('Evento Creado');
           this.isFormVisible = false; // Reseteo del formulario después de crear el evento
         },
         error => {
           console.error('Error al crear evento', error);
         }
      );
     }
  }
}
