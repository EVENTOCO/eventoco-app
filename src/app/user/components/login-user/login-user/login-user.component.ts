import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent {
  loginForm: FormGroup;
  isFormVisible = false;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  toggleFormVisibility(): void {
    this.isFormVisible = !this.isFormVisible;
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.userService.loginUser(email, password).subscribe({
        next: (response) => {
          console.log('Sesión iniciada correctamente.', response);
          localStorage.setItem('userId', response.id.toString());
          // window.location.reload(); // Recargar la página actual
          this.router.navigate(['']);
        },
        error: (error) => {
          console.error('Los datos son incorrectos o el usuario no existe', error);
        }
      });
    }
  }
}
