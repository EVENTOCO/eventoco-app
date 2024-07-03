import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UserResponse } from '../../../model/user-response.model';

@Component({
  selector: 'app-logout-user',
  templateUrl: './logout-user.component.html',
  styleUrl: './logout-user.component.css'
})
export class LogoutUserComponent {
  @Input() user!: UserResponse;

  constructor() { }

  logout(): void {
    const confirmation = confirm(`¿Seguro de que quieres cerrar la sesión de ${this.user.username}?`);
    if (confirmation) {
      localStorage.removeItem('userId');
      window.location.reload();
    }
  }
}
