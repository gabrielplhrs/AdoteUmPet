import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { ModalHelpShelterComponent } from '../../components/modal-help-shelter/modal-help-shelter.component';
import { HeaderbarComponent } from '../../components/headerbar/headerbar.component';
import { PetService } from '../../service/pet.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-animal-profile',
  standalone: true,
  imports: [ButtonComponent, HeaderbarComponent],
  templateUrl: './animal-profile.component.html',
  styleUrl: './animal-profile.component.css',
})
export class AnimalProfileComponent implements OnInit {
  shelterModalVisible = false;
  pet: any=[];

  constructor(
    private petService: PetService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      let id = params['id'];
      this.pet = this.petService.getAnimal(id);
    });
  }

  recieveEvent(id: number) {
    this.router.navigate(['/abrigo', id]);
  }
}
