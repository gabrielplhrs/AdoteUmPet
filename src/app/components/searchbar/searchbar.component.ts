import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchbar',
  standalone: true,
  imports: [],
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.css'
})
export class SearchbarComponent {
  @Input('label') label = '';
  @Input('text') text = '';

  constructor(private router: Router) {}
    
  onEnter(event: any) {
    const inputText: string = event.target.value;
    if (inputText.length === 0) return;
    
    else {
      this.router.navigate(['/resultado'])
    }
  }
}
