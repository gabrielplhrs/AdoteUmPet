import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { ModalHelpShelterComponent } from '../../components/modal-help-shelter/modal-help-shelter.component';
import { ModalEditAnnouncementComponent } from '../../components/modal-edit-announcement/modal-edit-announcement.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [ButtonComponent, ModalHelpShelterComponent, ModalEditAnnouncementComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  shelterModalVisible = false;
  shelterEditModalVisible = false;

  recieveEvent($event: void) {
    this.shelterModalVisible = true;
  }

  recieveEventEditShelter($event: void) {
    this.shelterEditModalVisible = true;
  }

  triggerShelterModalClosure($event: void) {
    this.shelterModalVisible = false;
  }
}
