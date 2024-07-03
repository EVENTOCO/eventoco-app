import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-see-events',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>see-events works!</p>`,
  styleUrl: './see-events.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SeeEventsComponent { }
