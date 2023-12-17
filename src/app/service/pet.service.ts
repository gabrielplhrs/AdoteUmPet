import { formatDate, registerLocaleData } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { Shelter } from './shelter.service';

registerLocaleData(localePt);

@Injectable({ providedIn: 'root' })
export class PetService {
  constructor(private http: HttpClient) {}

  private dateNow = Date.now();
  private formattedDateNow = formatDate(this.dateNow, 'dd/MM/yyyy', 'pt-BR');

  private database: Pet[] = [
    {
      id: 0,
      name: 'Alessandro',
      announcementDate: this.dateNow,
      formattedDate: this.formattedDateNow,
      description: 'Cat’s share 95.6 percent of their genome with tigers and demonstrate several of the same behaviors.',
      shelter: {
        id: 1,
        name: 'Pet Care',
        city: 'Vitória',
        neighborhood: 'Jardim da Penha',
        email: 'patinhas@carentes.com',
        phone: '(27) 99999-8888',
      },
    },
    {
      id: 1,
      name: 'Saulo',
      announcementDate: this.dateNow,
      formattedDate: this.formattedDateNow,
      description: 'Cats use their whiskers to navigate through the world. They use them to help determine if they can fit in a small space because their whiskers are approximately the same width as their body. This is why you shouldn’t cut your cat’s whiskers.',
      shelter: {
        id: 1,
        name: 'Pet Care',
        city: 'Vitória',
        neighborhood: 'Jardim da Penha',
        email: 'patinhas@carentes.com',
        phone: '(27) 99999-8888',
      },
    },
    {
      id: 2,
      name: 'Cassio',
      announcementDate: this.dateNow,
      formattedDate: this.formattedDateNow,
      description: 'Neutered and spayed cats live longer than unaltered cats.',
      shelter: {
        id: 1,
        name: 'Pet Care',
        city: 'Vitória',
        neighborhood: 'Jardim da Penha',
        email: 'patinhas@carentes.com',
        phone: '(27) 99999-8888',
      },
    },
    {
      id: 3,
      name: 'Anselmo',
      announcementDate: this.dateNow,
      formattedDate: this.formattedDateNow,
      description: 'Cats’ collar bones don’t connect to the rest of their skeleton and are instead buried in their shoulder muscles.',
      shelter: {
        id: 1,
        name: 'Pet Care',
        city: 'Venda Nova do Imigrante',
        neighborhood: 'Sei la',
        email: 'pet@care.com',
        phone: '(27) 99999-8888',
      },
    },
  ];

  getPets(): Pet[] {
    // this.http.get(
    //     'https://catfact.ninja/fact',
    //     {
    //         headers: {

    //         }
    //     }
    // ).subscribe((res) => {
    //     console.log(res);
    // });

    return this.database;
  }

  getPetById(id: number): Pet | undefined {
    return this.database.find(pet => pet.id == id);
  }

  deleteAnnouncement(id: number) {
    this.database = this.database.filter(pet => pet.id != id)
  }
}

export interface Pet {
  id: number;
  name: string;
  announcementDate: number;
  formattedDate: string;
  description: string;
  shelter: Shelter;
}
