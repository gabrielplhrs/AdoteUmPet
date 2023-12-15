import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private _router: Router) {}

  recieveEvent($event: void) {
    // this._router.navigate(['abrigo'])
    this.shelterModalVisible = true;
  }

  triggerModalClosure($event: void) {
    this.shelterModalVisible = false;
  }
}
