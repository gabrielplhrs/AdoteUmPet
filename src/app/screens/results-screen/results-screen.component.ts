import { Component, Input, OnInit } from '@angular/core';
import { HeaderbarComponent } from '../../components/headerbar/headerbar.component';
import { PetService } from '../../service/pet.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-results-screen',
  standalone: true,
  imports: [HeaderbarComponent, CommonModule],
  templateUrl: './results-screen.component.html',
  styleUrl: './results-screen.component.css'
})
export class ResultsScreenComponent implements OnInit{

  animaisList$!: Observable<any[]>;
  abrigosList$!: Observable<any[]>;
  abrigosNomesList: any=[];
  abrigosBairrosList: any=[];

  nomeAbrigosMap:Map<number, string> = new Map();
  bairroAbrigosMap:Map<number, string> = new Map();

  constructor(private service: PetService, private router: Router) {}

  ngOnInit(): void {
    this.animaisList$ = this.service.getAnimalList();
    this.abrigosList$ = this.service.getAbrigoList()
    this.refreshNomeAbrigosMap();
    this.refreshBairrosAbrigos();
  }

  refreshNomeAbrigosMap(){
    this.service.getAbrigoList().subscribe(data => {
      this.abrigosNomesList = data;

      for(let i = 0; i < data.length; i++){
        this.nomeAbrigosMap.set(this.abrigosNomesList[i].id, this.abrigosNomesList[i].name)
      }
    })
  }

  refreshBairrosAbrigos(){
    this.service.getAbrigoList().subscribe(data => {
      this.abrigosBairrosList = data;

      for(let i = 0; i < data.length; i++){
        this.bairroAbrigosMap.set(this.abrigosBairrosList[i].id, this.abrigosBairrosList[i].bairro)
      }
      console.log(this.abrigosBairrosList)
    })

  }

  animalCardClick(id: number) {
    this.router.navigate(['/animal', id]);
  }
}
