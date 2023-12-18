import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-modal-help-shelter',
  standalone: true,
  imports: [ModalComponent, ButtonComponent],
  templateUrl: './modal-help-shelter.component.html',
  styleUrl: './modal-help-shelter.component.css'
})
export class ModalHelpShelterComponent {
  @Input('visible') visible = false;
  @Input('description') description = '';

  @Output() notifyParent = new EventEmitter<void>();

  recieveEvent() {
    this.visible = !this.visible;
    this.notifyParent.emit();
  }
}
