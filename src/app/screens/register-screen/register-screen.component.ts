import { Component, Input } from '@angular/core';
import { HeaderbarComponent } from '../../components/headerbar/headerbar.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PetService } from '../../service/pet.service';

@Component({
  selector: 'app-register-screen',
  standalone: true,
  imports: [HeaderbarComponent, CommonModule, FormsModule],
  templateUrl: './register-screen.component.html',
  styleUrl: './register-screen.component.css'
})
export class RegisterScreenComponent {
  checkboxSelected = false;

  constructor(private service:PetService, private router:Router) {}

  @Input() abrigo:any;
  id: number = 0;
  name: string = "";
  email: string = "";
  telefone: string ="";
  description: string = "";
  cidade: string = "";
  bairro: string ="";
  logo: string = "";


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

  addAbrigo(){
    var abrigo = {
      name:this.name,
      email:this.email,
      telefone:this.telefone,
      description:this.description,
      cidade:this.cidade,
      bairro:this.bairro,
      logo:this.logo,
    }
    this.service.addAbrigo(abrigo).subscribe(res=>{
      this.router.navigate(['/buscar']);
    })
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
