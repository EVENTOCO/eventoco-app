import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UserResponse } from './../../../model/user-response.model';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent {
  @Input() user!: UserResponse;
  @Output() userDeleted = new EventEmitter<number>();

  constructor(private userService: UserService) {}

  confirmDelete(): void {
    const confirmation = confirm(`¿Seguro de que quieres borrar el usuario ${this.user.username}?`);
    if (confirmation) {
      this.userService.deleteUser(this.user.id).subscribe({
        next: () => {
          this.userDeleted.emit(this.user.id);
          localStorage.removeItem('userId');
          window.location.reload(); // Recargar la página actual
        },
        error: (error) => {
          console.error('Error al borrar usuario', error);
        }
      });
    }
  }
}
