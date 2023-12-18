import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { ModalHelpShelterComponent } from '../../components/modal-help-shelter/modal-help-shelter.component';
import { ModalEditAnnouncementComponent } from '../../components/modal-edit-announcement/modal-edit-announcement.component';
import { Abrigo, ImageAbrigo, PetService } from '../../service/pet.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, ButtonComponent, ModalHelpShelterComponent, ModalEditAnnouncementComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit{
  abrigo$!: ImageAbrigo;

  shelterModalVisible = false;
  shelterEditModalVisible = false;

  recieveEvent($event: void) {
    this.shelterModalVisible = true;
  }

  recieveEventEditShelter($event: void) {
    this.shelterEditModalVisible = true;
  }

  triggerShelterModalClosure($event: void) {
    this.shelterModalVisible = false;
  }

  constructor(
    private service: PetService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      let id = params['id'];

      this.service.getAbrigo(id).subscribe((abrigo: ImageAbrigo) => {
        this.abrigo$ = abrigo;
        this.abrigo$.image = `../../../assets/${abrigo.id}-abrigo.png`
      })
    });
  }
}
