import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GetpetApiService } from '../../getpet-api.service';
import { HeaderbarComponent } from '../../components/headerbar/headerbar.component';

@Component({
  selector: 'app-results-screen',
  standalone: true,
  imports: [HeaderbarComponent],
  templateUrl: './results-screen.component.html',
  styleUrl: './results-screen.component.css'
})
export class ResultsScreenComponent implements OnInit{

  animalList$!:Observable<any[]>;
  animalList:any=[];

  animalMap:Map<number, string> = new Map();

  constructor(private service:GetpetApiService) {}

  ngOnInit(): void {
    this.animalList$ = this.service.getAnimalList();
  }
}
