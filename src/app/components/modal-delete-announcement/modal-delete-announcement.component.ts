import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { ButtonAltComponent } from '../button-alt/button-alt.component';
import { PetService } from '../../service/pet.service';

@Component({
  selector: 'app-modal-delete-announcement',
  standalone: true,
  imports: [ModalComponent, ButtonAltComponent],
  templateUrl: './modal-delete-announcement.component.html',
  styleUrl: './modal-delete-announcement.component.css'
})
export class ModalDeleteAnnouncementComponent {

  @Input('visible') visible = false;
  @Input('petId') petId: number | undefined = undefined;

  @Output() notifyDeleteClosure = new EventEmitter<void>();

  constructor(private petService: PetService) {}

  recieveEvent() {
    this.visible = !this.visible;
    this.notifyDeleteClosure.emit();
  }

  recieveDeleteEvent() {
    if (this.petId != undefined)
      this.petService.deleteAnimal(this.petId);
    this.recieveEvent();

  }
}
