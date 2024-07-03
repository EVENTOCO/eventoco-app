import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-see-tutorial',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>see-tutorial works!</p>`,
  styleUrl: './see-tutorial.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SeeTutorialComponent { }
