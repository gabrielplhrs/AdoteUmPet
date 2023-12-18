import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ButtonAltComponent } from '../button-alt/button-alt.component';
import { PetService, Animal } from '../../service/pet.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map } from 'rxjs';


@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [ButtonAltComponent, CommonModule],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css'
})
export class MainContentComponent implements OnInit {
  @Output() notifyParentEdit = new EventEmitter<void>();
  @Output() notifyParentDelete = new EventEmitter<void>();

  animaisList$: Animal[] | undefined;
  animaisAbrigoList: Animal[] | undefined;;

  animaisAbrigoMap:Map<number, string> = new Map();

  recieveEditEvent() {
    this.notifyParentEdit.emit();
  }

  recieveDeleteEvent() {
    this.notifyParentDelete.emit();
  }

  createAnnouncement() {
    this.router.navigate(['animal-cadastro']);
  }

  getAnimalByAbrigo(abrigoId: number) {
    if (this.animaisList$ == undefined) return;

    return this.animaisList$.filter(animal => animal.abrigoId === abrigoId);
  }

  constructor(
    private service: PetService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      let id = Number(params['id']);

      this.service.getAnimalList().subscribe((animais: Animal[]) => {
        this.animaisList$ = animais;
        this.animaisAbrigoList = this.getAnimalByAbrigo(id);
      });
    });
  }
}
