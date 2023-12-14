import { Component } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { MainContentComponent } from '../../components/main-content/main-content.component';

@Component({
  selector: 'app-abrigo-screen',
  standalone: true,
  imports: [SidebarComponent, MainContentComponent],
  templateUrl: './abrigo-screen.component.html',
  styleUrl: './abrigo-screen.component.css'
})
export class AbrigoScreenComponent {

}
