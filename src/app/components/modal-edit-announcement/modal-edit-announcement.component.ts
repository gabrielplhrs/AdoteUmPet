import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { ButtonAltComponent } from '../button-alt/button-alt.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal-edit-announcement',
  standalone: true,
  imports: [ModalComponent, ButtonAltComponent, CommonModule, FormsModule],
  templateUrl: './modal-edit-announcement.component.html',
  styleUrl: './modal-edit-announcement.component.css'
})
export class ModalEditAnnouncementComponent {
  name = '';
  email = '';
  phone = '';
  address = '';
  // email = '';

  @Input('visible') visible = false;

  @Output() notifyEditClosure = new EventEmitter<void>();

  recieveEvent() {
    this.visible = !this.visible;
    this.notifyEditClosure.emit();
  }

  recieveSaveEvent() {
    this.visible = !this.visible;
    this.notifyEditClosure.emit();
  }
}
