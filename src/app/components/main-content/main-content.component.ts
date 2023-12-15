import { Component, EventEmitter, Output } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
// import { }

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css'
})
export class MainContentComponent {
  @Output() notifyParentEdit = new EventEmitter<void>();
  @Output() notifyParentDelete = new EventEmitter<void>();

  recieveEditEvent() {
    this.notifyParentEdit.emit();
  }

  recieveDeleteEvent() {
    this.notifyParentDelete.emit();
  }
}
