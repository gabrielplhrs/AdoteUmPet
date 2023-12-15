import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-alt',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button-alt.component.html',
  styleUrl: './button-alt.component.css'
})
export class ButtonAltComponent {
  @Input('text') text = '';
  @Input('className') className = 'getpet-button-alt';

  @Output() clickEvent = new EventEmitter<void>();  // Send action or close (false)

  sendClickEvent() {    
    this.clickEvent.emit();
  }
}
