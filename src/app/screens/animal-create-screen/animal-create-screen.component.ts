import { Component } from '@angular/core';
import { AnimalFormComponent } from '../../components/animal-form/animal-form.component';
import { HeaderbarComponent } from '../../components/headerbar/headerbar.component';

@Component({
  selector: 'app-animal-create-screen',
  standalone: true,
  imports: [AnimalFormComponent, HeaderbarComponent],
  templateUrl: './animal-create-screen.component.html',
  styleUrl: './animal-create-screen.component.css'
})
export class AnimalCreateScreenComponent {

}
