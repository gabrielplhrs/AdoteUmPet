import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { ButtonAltComponent } from '../button-alt/button-alt.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PetService } from '../../service/pet.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modal-edit-announcement',
  standalone: true,
  imports: [ModalComponent, ButtonAltComponent, CommonModule, FormsModule],
  templateUrl: './modal-edit-announcement.component.html',
  styleUrl: './modal-edit-announcement.component.css'
})
export class ModalEditAnnouncementComponent implements OnInit {

  constructor(
    private service: PetService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  @Input() abrigo:any;
  id: number = 0;
  name: string = "";
  email: string = "";
  telefone: string ="";
  description: string = "";
  cidade: string = "";
  bairro: string ="";
  logo: string = "string";

  @Input('visible') visible = false;

  @Output() notifyEditClosure = new EventEmitter<void>();

  recieveEvent() {
    this.visible = !this.visible;
    this.notifyEditClosure.emit();
  }

  recieveSaveEvent() {
    this.updateAbrigo()
    this.visible = !this.visible;
    this.notifyEditClosure.emit();
  }

  ngOnInit(): void {
    this.id = this.abrigo.id;
    this.name = this.abrigo.name;
    this.email = this.abrigo.email;
    this.telefone = this.abrigo.telefone;
    this.description = this.abrigo.description;
    this.cidade = this.abrigo.cidade;
    this.bairro = this.abrigo.bairro;
    this.logo = this.abrigo.logo;
  }

  updateAbrigo(){
    this.route.params.subscribe((params) => {
      let id = params['id'];
      console.log(id)

      var abrigo = {
        name:this.name,
        email:this.email,
        telefone:this.telefone,
        description:this.description,
        cidade:this.cidade,
        bairro:this.bairro,
        logo:this.logo,
      }
      this.service.updateAbrigo(id, abrigo).subscribe(res=>{
      })
      })
  }


}
