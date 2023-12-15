import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-modal-edit-announcement',
  standalone: true,
  imports: [ModalComponent, ButtonComponent],
  templateUrl: './modal-edit-announcement.component.html',
  styleUrl: './modal-edit-announcement.component.css'
})
export class ModalEditAnnouncementComponent {
  @Input('visible') visible = false;

  @Output() notifyEditClosure = new EventEmitter<void>();

  recieveEvent() {
    this.visible = !this.visible;
    this.notifyEditClosure.emit();
  }

}
