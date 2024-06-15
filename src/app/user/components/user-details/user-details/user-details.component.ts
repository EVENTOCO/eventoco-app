import { Component, Input, OnInit, inject } from '@angular/core';
import { UserResponse } from './../../../model/user-response.model';
import { UserService } from './../../../services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent implements OnInit {
  @Input() user!: UserResponse;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUser();
  }

  loadUser(): void {
    const userId = localStorage.getItem('userId');
    if (userId) {
      this.userService.getUserById(+userId).subscribe(user => {
        this.user = user;
        console.log('Los datos del usuario han sido cargados correctamente:', this.user);
      }, error => {
        console.error('la sesión ha sido cerrada', error);
      });
    }
  }
}
