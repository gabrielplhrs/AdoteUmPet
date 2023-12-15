import { Component } from '@angular/core';
import { SearchbarComponent } from '../../components/searchbar/searchbar.component';
import { ModalHelpShelterComponent } from '../../components/modal-help-shelter/modal-help-shelter.component';
import { HeaderbarComponent } from '../../components/headerbar/headerbar.component';

@Component({
  selector: 'app-searchscreen',
  standalone: true,
  imports: [SearchbarComponent, ModalHelpShelterComponent, HeaderbarComponent],
  templateUrl: './searchscreen.component.html',
  styleUrl: './searchscreen.component.css'
})
export class SearchscreenComponent {
  
}
