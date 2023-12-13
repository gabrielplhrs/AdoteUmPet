import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderbarComponent } from './headerbar/headerbar.component'
// import { SearchscreenComponent } from './screens/searchscreen/searchscreen.component';
import { MainContentComponent } from './main-content/main-content.component'
import { SidebarComponent } from './sidebar/sidebar.component'
import { AnimalFormComponent } from './animal-form/animal-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderbarComponent, SidebarComponent, MainContentComponent, AnimalFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'GetPet';
}
