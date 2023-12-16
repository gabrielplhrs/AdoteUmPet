import { Component, EventEmitter, Output } from '@angular/core';
import { User, UserService } from '../../service/user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-screen',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login-screen.component.html',
  styleUrl: './login-screen.component.css',
})
export class LoginScreenComponent {
  email = '';
  password = '';

  constructor(private userService: UserService, private router: Router) {}

  navigateToLogin(user: User) {    
    this.router.navigate(['/buscar']);
  }

  handleLogin() {
    const user = this.userService.login(this.email, this.password);
    if (user == undefined) return;
    else {
      this.navigateToLogin(user);
    }
  }
}
