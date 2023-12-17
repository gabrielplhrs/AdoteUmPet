import { Component, EventEmitter, Output } from '@angular/core';
import { ButtonAltComponent } from '../button-alt/button-alt.component';
import { Pet, PetService } from '../../service/pet.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [ButtonAltComponent, CommonModule],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css'
})
export class MainContentComponent {
  @Output() notifyParentEdit = new EventEmitter<void>();
  @Output() notifyParentDelete = new EventEmitter<void>();

  pets: Pet[];

  constructor(private petService: PetService, private router: Router) {
    this.pets = petService.getPets();
  }

  recieveEditEvent() {
    this.notifyParentEdit.emit();
  }

  recieveDeleteEvent() {
    this.notifyParentDelete.emit();
  }

  createAnnouncement() {
    this.router.navigate(['animal-cadastro']);
  }
}
