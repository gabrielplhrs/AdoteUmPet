import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderbarComponent } from './components/headerbar/headerbar.component'
import { SearchscreenComponent } from './screens/searchscreen/searchscreen.component';
// import { MainContentComponent } from './components/main-content/main-content.component'
// import { SidebarComponent } from './components/sidebar/sidebar.component'
// import { AnimalFormComponent } from './animal-form/animal-form.component';
import { AnimalProfileComponent } from './screens/animal-profile/animal-profile.component';
import { AbrigoScreenComponent } from './screens/abrigo-screen/abrigo-screen.component';
import { CadastroScreenComponent } from './screens/cadastro-screen/cadastro-screen.component';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';
import { ResultsScreenComponent } from './screens/results-screen/results-screen.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderbarComponent, /* MainContentComponent, SidebarComponent, AnimalFormComponent,*/ResultsScreenComponent, LoginScreenComponent, CadastroScreenComponent, AnimalProfileComponent,AbrigoScreenComponent, SearchscreenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'GetPet';
}
