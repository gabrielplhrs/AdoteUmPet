import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PetService } from '../../service/pet.service';

@Component({
  selector: 'app-cadastro-screen',
  standalone: true,
  imports: [],
  templateUrl: './cadastro-screen.component.html',
  styleUrl: './cadastro-screen.component.css'
})
export class CadastroScreenComponent implements OnInit {

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

}
