import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input('text') text = '';

  @Output() clickEvent = new EventEmitter<void>();  // Send action or close (false)

  sendClickEvent() {    
    this.clickEvent.emit();
  }
}
