import { Component } from '@angular/core';
import { SearchbarComponent } from '../../searchbar/searchbar.component';

@Component({
  selector: 'app-searchscreen',
  standalone: true,
  imports: [SearchbarComponent],
  templateUrl: './searchscreen.component.html',
  styleUrl: './searchscreen.component.css'
})
export class SearchscreenComponent {

}
