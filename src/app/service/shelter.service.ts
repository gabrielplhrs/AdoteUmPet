import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ShelterService {
  constructor(private http: HttpClient) {}

  getShelters(): Shelter[] {
    // this.http.get(
    //     'https://catfact.ninja/fact',
    //     {
    //         headers: {

    //         }
    //     }
    // ).subscribe((res) => {
    //     console.log(res);
    // });

    return [
      {
        id: 0,
        name: 'Patinhas Carentes',
        city: 'Vitória',
        neighborhood: 'Jardim da Penha',
        email: 'patinhas@carentes.com',
        phone: '(27) 99999-8888',
      },
      {
        id: 1,
        name: 'Pet Care',
        city: 'Venda Nova do Imigrante',
        neighborhood: 'Sei la',
        email: 'pet@care.com',
        phone: '(27) 99999-8888',
      },
    ];
  }

  getShelterById(id: number): Shelter | undefined {
    // Fetch one from database
    const database: Shelter[] = [
        {
          id: 0,
          name: 'Patinhas Carentes',
          city: 'Vitória',
          neighborhood: 'Jardim da Penha',
          email: 'patinhas@carentes.com',
          phone: '(27) 99999-8888',
        },
        {
          id: 1,
          name: 'Pet Care',
          city: 'Venda Nova do Imigrante',
          neighborhood: 'Sei la',
          email: 'pet@care.com',
          phone: '(27) 99999-8888',
        },
    ];

    return database.find(shelter => shelter.id === id);
  }
}

export interface Shelter {
  id: number;
  name: string;
  city: string;
  neighborhood: string;
  email: string;
  phone: string;
}
