import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { HeaderbarComponent } from '../../components/headerbar/headerbar.component';
import { Abrigo, Animal, ImageAnimal, PetService } from '../../service/pet.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-animal-profile',
  standalone: true,
  imports: [ButtonComponent, HeaderbarComponent, FormsModule, CommonModule],
  templateUrl: './animal-profile.component.html',
  styleUrl: './animal-profile.component.css',
})
export class AnimalProfileComponent implements OnInit {
  animal$!: ImageAnimal;
  abrigo$!: Abrigo;

  shelterModalVisible = false;

  constructor(
    private service: PetService,
    private route: ActivatedRoute,
    private router: Router
  ) {}


  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      let id = params['id'];
      this.service.getAnimal(id).subscribe((animal: ImageAnimal) => {
        this.animal$ = animal;
        this.animal$.image = `../../../assets/${animal.id}.png`
        this.service.getAbrigo(this.animal$.abrigoId).subscribe((abrigo: Abrigo) => {
          this.abrigo$ = abrigo;
        })
      })
    });
  }

  recieveEvent(id: number) {
    this.router.navigate(['/abrigo', id]);
  }

}
