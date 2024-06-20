import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-create-event',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>create-event works!</p>`,
  styleUrl: './create-event.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateEventComponent { }
