import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headerbar',
  standalone: true,
  imports: [],
  templateUrl: './headerbar.component.html',
  styleUrl: './headerbar.component.css'
})
export class HeaderbarComponent {
  constructor(private router: Router) {}
  
  navigateToLogin() {
    this.router.navigate(['/login'])
  }
}
