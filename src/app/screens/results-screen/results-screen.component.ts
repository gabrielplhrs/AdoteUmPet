import { Component } from '@angular/core';
import { HeaderbarComponent } from '../../components/headerbar/headerbar.component';
import { Pet, PetService } from '../../service/pet.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results-screen',
  standalone: true,
  imports: [HeaderbarComponent, CommonModule],
  templateUrl: './results-screen.component.html',
  styleUrl: './results-screen.component.css'
})
export class ResultsScreenComponent {
  pets: Pet[];
  
  constructor(private petService: PetService, private router: Router) {
    this.pets = petService.getPets();
  }
  
  animalCardClick(id: number) {
    this.router.navigate(['/animal', id]);
  }
}
