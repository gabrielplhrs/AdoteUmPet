import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-modal-delete-announcement',
  standalone: true,
  imports: [ModalComponent, ButtonComponent],
  templateUrl: './modal-delete-announcement.component.html',
  styleUrl: './modal-delete-announcement.component.css'
})
export class ModalDeleteAnnouncementComponent {
  @Input('visible') visible = false;

  @Output() notifyDeleteClosure = new EventEmitter<void>();

  recieveEvent() {
    this.visible = !this.visible;
    this.notifyDeleteClosure.emit();
  }

}
