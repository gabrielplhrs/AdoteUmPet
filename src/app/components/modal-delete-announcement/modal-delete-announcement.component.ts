import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { ButtonAltComponent } from '../button-alt/button-alt.component';
import { Animal, PetService } from '../../service/pet.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modal-delete-announcement',
  standalone: true,
  imports: [ModalComponent, ButtonAltComponent],
  templateUrl: './modal-delete-announcement.component.html',
  styleUrl: './modal-delete-announcement.component.css'
})
export class ModalDeleteAnnouncementComponent implements OnInit{
  animal$!: Animal;

  @Input('visible') visible = false;
  @Input('deleteId') deleteId = 0;

  @Output() notifyDeleteClosure = new EventEmitter<void>();

  constructor(
    private service: PetService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  recieveEvent() {
    this.visible = !this.visible;
    this.notifyDeleteClosure.emit();
  }

  recieveDeleteEvent() {
    if (this.deleteId != undefined)
      this.service.deleteAnimal(this.deleteId);
    this.recieveEvent();
  }

  ngOnInit(): void {


  }
}
