import { Component } from '@angular/core';
import { UserResponse } from './model/user-response.model';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  user!: UserResponse;
  isEditVisible = false;
  isRegisterVisible = false;
  isLoginVisible = false;


  constructor(private userService: UserService) {}

  ngOnInit(): void {
    const userId = localStorage.getItem('userId');
    if (userId) {
      this.userService.getUserById(+userId).subscribe(user => {
        this.user = user;
      });
    }
  }

  toggleEditForm(): void {
    this.isEditVisible = !this.isEditVisible;
  }

  toggleRegisterForm(): void {
    this.isRegisterVisible = !this.isRegisterVisible;
  }

  toggleLoginForm(): void {
    this.isLoginVisible = !this.isLoginVisible;
  }

  onUserDeleted(userId: number): void {
    this.user = null!;
    this.userService.deleteUser(userId).subscribe(() => {
      console.log(`User with ID ${userId} has been deleted.`);
      localStorage.removeItem('userId');
    });
  }
}
