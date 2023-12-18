import { formatDate, registerLocaleData } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { Observable } from 'rxjs';

registerLocaleData(localePt);

@Injectable({ providedIn: 'root' })
export class PetService {
  constructor(private http: HttpClient) {}

  private dateNow = Date.now();
  private formattedDateNow = formatDate(this.dateNow, 'dd/MM/yyyy', 'pt-BR');

  getAnimalList():Observable<any[]>{
    return this.http.get<any>('https://localhost:7284/api/animais');
  }

  getAnimal(id:number|string){
    return this.http.get<any>(`https://localhost:7284/api/animais/${id}`);
  }

  addAnimal(data:any){
    return this.http.post('https://localhost:7284/api/animais/', data);
  }

  updateAnimal(id:number|string, data:any){
    return this.http.put(`https://localhost:7284/api/animais/${id}`, data);
  }

  deleteAnimal(id:number|string){
    return this.http.delete(`https://localhost:7284/api/animais/${id}`)
  }

  //Abrigo

  getAbrigoList():Observable<any[]>{
    return this.http.get<any>('https://localhost:7284/api/abrigos');
  }

  getAbrigo(id:number|string){
    return this.http.get<any>(`https://localhost:7284/api/abrigos/${id}`);
  }

  addAbrigo(data:any){
    return this.http.post('https://localhost:7284/api/abrigos', data);
  }

  updateAbrigo(id:number|string, data:any){
    return this.http.put(`https://localhost:7284/api/abrigos/${id}`, data);
  }
}

export interface Animal {
  id: number;
  name: string;
  announcementDate: number;
  formattedDate: string;
  description: string;
  abrigoId: number;
  abrigo: Abrigo;
}

export interface Abrigo {
  id: number;
  name: string;
  cidade: string;
  bairro: string;
  email: string;
  telefone: string;
  description: string;
}
