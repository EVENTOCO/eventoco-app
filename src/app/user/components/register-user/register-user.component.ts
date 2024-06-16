import { Component, inject } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrl: './register-user.component.css'
})
export class RegisterUserComponent {
  userForm: FormGroup;
  isFormVisible = false;

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.userForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      birthday: ['', Validators.required]
    });
  }

  toggleFormVisibility(): void {
    this.isFormVisible = !this.isFormVisible;
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      const newUser = this.userForm.value;
      this.userService.createUser(newUser).subscribe(() => {
        console.log('Registro completado');
        window.location.reload(); // Recargar la página actual
      }, error => {
        console.error('Error al registrar usuario', error);
      });
    }
  }
}
