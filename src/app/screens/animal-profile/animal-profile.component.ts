import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { ModalHelpShelterComponent } from '../../components/modal-help-shelter/modal-help-shelter.component';

@Component({
  selector: 'app-animal-profile',
  standalone: true,
  imports: [ButtonComponent, ModalHelpShelterComponent],
  templateUrl: './animal-profile.component.html',
  styleUrl: './animal-profile.component.css'
})
export class AnimalProfileComponent {
  shelterModalVisible = false;

  recieveEvent($event: void) {
    this.shelterModalVisible = true;
  }

  triggerModalClosure($event: void) {
    this.shelterModalVisible = false;
  }
}
