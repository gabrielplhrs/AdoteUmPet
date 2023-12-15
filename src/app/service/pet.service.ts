import { formatDate, registerLocaleData } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { Shelter } from './shelter.service';

registerLocaleData(localePt);

@Injectable({ providedIn: 'root' })
export class PetService {
  constructor(private http: HttpClient) {}

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

    const dateNow = Date.now();
    const formattedDateNow = formatDate(dateNow, 'dd/MM/yyyy', 'pt-BR');

    return [
      {
        id: 0,
        name: 'Alessandro',
        announcementDate: dateNow,
        formattedDate: formattedDateNow,
        shelter: {
          id: 1,
          name: 'Pet Care',
          location: 'Venda Nova do Imigrante',
        },
      },
      {
        id: 1,
        name: 'Saulo',
        announcementDate: dateNow,
        formattedDate: formattedDateNow,
        shelter: {
          id: 1,
          name: 'Pet Care',
          location: 'Venda Nova do Imigrante',
        },
      },
      {
        id: 2,
        name: 'Cassio',
        announcementDate: dateNow,
        formattedDate: formattedDateNow,
        shelter: {
          id: 1,
          name: 'Pet Care',
          location: 'Venda Nova do Imigrante',
        },
      },
      {
        id: 3,
        name: 'Anselmo',
        announcementDate: dateNow,
        formattedDate: formattedDateNow,
        shelter: {
          id: 1,
          name: 'Pet Care',
          location: 'Venda Nova do Imigrante',
        },
      },
    ];
  }
}

export interface Pet {
  id: number;
  name: string;
  announcementDate: number;
  formattedDate: string;
  shelter: Shelter;
}
