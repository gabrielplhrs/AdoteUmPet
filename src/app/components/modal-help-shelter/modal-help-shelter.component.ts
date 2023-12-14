import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
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

  @Input('bankName') bankName = '';
  @Input('name') name = '';
  @Input('cnpj') cnpj = '';
  @Input('agency') agency = '';
  @Input('account') account = '';
  @Input('pix') pix = '';
  @Input('picpay') picpay = '';

  @Output() notifyParent = new EventEmitter<void>();

  recieveEvent() {    
    this.visible = !this.visible;
    this.notifyParent.emit();
  }
}
