import {Component, Input} from '@angular/core';
import { Router } from '@angular/router';
import {UserResponse} from "../../user/model/user-response.model";
import {UserService} from "../../user/services/user.service";

@Component({
  selector: 'app-landing-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Input() user!: UserResponse;

  constructor(private router: Router, private userService: UserService) { }

  toLogin(){
    this.router.navigate(['login'])
  }

  toRegister() {
    this.router.navigate(['register'])
  }

  logout(): void {
    this.loadUser()
    const confirmation = confirm(`¿Seguro de que quieres cerrar la sesión de ${this.user.username}?`);
    if (confirmation) {
      localStorage.removeItem('userId');
      window.location.reload();
    }
  }

  loadUser(): void {
    const userId = localStorage.getItem('userId');
    if (userId) {
      this.userService.getUserById(+userId).subscribe({
        next: (user: UserResponse) => {
          this.user = user;
          console.log('Los datos del usuario han sido cargados correctamente:', this.user);
        },
        error: (error: any) => {
          console.error('La sesión ha sido cerrada', error);
        }
      });
    }
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('userId');
  }

}
