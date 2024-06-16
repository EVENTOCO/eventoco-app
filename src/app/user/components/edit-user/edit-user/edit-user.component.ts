import { Component, Input} from '@angular/core';
import { UserResponse } from './../../../model/user-response.model';
import { NgForm } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { UserRequest } from '../../../model/user-request.model';


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {
  @Input() user!: UserResponse;

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm): void {
    if (form.valid) {
      const updatedUser: UserRequest = {
        username: form.value.username,
        password: form.value.password,
        email: form.value.email,
        phone: form.value.phone,
        birthday: form.value.birthday
      };

      this.userService.updateUser(this.user.id, updatedUser).subscribe(() => {
        console.log('Datos actualizados correctamente.');
        window.location.reload();
      }, error => {
        console.error('Error al editar datos del usuario', error);
      });
    }
  }
}
