import { Component } from '@angular/core';
import { HeaderbarComponent } from '../../components/headerbar/headerbar.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register-screen',
  standalone: true,
  imports: [HeaderbarComponent, CommonModule, FormsModule],
  templateUrl: './register-screen.component.html',
  styleUrl: './register-screen.component.css'
})
export class RegisterScreenComponent {
  checkboxSelected = false;
  
  constructor(private router: Router) {}

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
