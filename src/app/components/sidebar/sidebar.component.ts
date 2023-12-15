import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { ModalHelpShelterComponent } from '../../components/modal-help-shelter/modal-help-shelter.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [ButtonComponent, ModalHelpShelterComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  shelterModalVisible = false;

  recieveEvent($event: void) {
    this.shelterModalVisible = true;
  }

  triggerModalClosure($event: void) {
    this.shelterModalVisible = false;
  }
}
