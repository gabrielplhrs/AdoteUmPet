import { Component, Input, OnInit } from '@angular/core';
import { PetService } from '../../service/pet.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-animal-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './animal-form.component.html',
  styleUrl: './animal-form.component.css'
})
export class AnimalFormComponent{

  constructor(
    private service: PetService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  @Input() animal:any;
  id: number = 0;
  name: string = "";
  description: string = "";
  abrigoId: number = 0

  ngOnInit(): void {

      this.id = this.animal.id;
      this.name = this.animal.name;
      this.description = this.animal.description;
      this.abrigoId = this.animal.abrigoId;

  }

  addAnimal(){
    this.route.params.subscribe((params) => {
      let id = Number(params['id']);
      var animal = {
        name:this.name,
        description:this.description,
        abrigoId:id
      }
    this.service.addAnimal(animal).subscribe(res=>{
      this.router.navigate(['/abrigo',id]);
    })
  });
  }
}
