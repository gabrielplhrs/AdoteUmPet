import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User, UserService } from '../../service/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-headerbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './headerbar.component.html',
  styleUrl: './headerbar.component.css',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class HeaderbarComponent implements OnInit {
  user: User | undefined = undefined;

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit() {
    this.user = this.userService.getLoggedUser();
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
