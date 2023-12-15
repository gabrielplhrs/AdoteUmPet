import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetpetApiService {

  readonly getpetAPIUrl = "https://localhost:7284/api";

  constructor(private http:HttpClient) { }

  //Abrigo

  getAbrigoList():Observable<any[]>{
    return this.http.get<any>(this.getpetAPIUrl + '/abrigos');
  }

  addAbrigo(data:any){
    return this.http.post(this.getpetAPIUrl + '/abrigos', data);
  }

  updateAbrigo(id:number|string, data:any){
    return this.http.put(this.getpetAPIUrl + `/abrigos/${id}`, data);
  }

  //Animal

  getAnimalList():Observable<any[]>{
    return this.http.get<any>(this.getpetAPIUrl + '/animais');
  }

  addAnimal(data:any){
    return this.http.post(this.getpetAPIUrl + '/animais', data);
  }

  updateAnimal(id:number|string, data:any){
    return this.http.put(this.getpetAPIUrl + `/animais/${id}`, data);
  }

  deleteAnimal(id:number|string){
    return this.http.delete(this.getpetAPIUrl + `/animais/${id}`)
  }
}
