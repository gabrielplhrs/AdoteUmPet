import { Component } from '@angular/core';
import { UserService } from '../../service/user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HeaderbarComponent } from '../../components/headerbar/headerbar.component';

@Component({
  selector: 'app-login-screen',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderbarComponent],
  templateUrl: './login-screen.component.html',
  styleUrl: './login-screen.component.css',
})
export class LoginScreenComponent {
  email = '';
  password = '';

  constructor(private userService: UserService, private router: Router) {}

  handleLogin() {
    const user = this.userService.login(this.email, this.password);
    if (user == undefined) return;
    else {
      this.router.navigate(['/buscar']);
    }
  }

  goToRegister() {
    this.router.navigate(['/registrar']);
  }
}
