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
        location: 'Vitória',
      },
      {
        id: 1,
        name: 'Pet Care',
        location: 'Venda Nova do Imigrante',
      },
    ];
  }

  getShelterById(id: number): Shelter | undefined {
    // Fetch one from database
    const database: Shelter[] = [
        {
          id: 0,
          name: 'Patinhas Carentes',
          location: 'Vitória',
        },
        {
          id: 1,
          name: 'Pet Care',
          location: 'Venda Nova do Imigrante',
        },
    ];

    return database.find(shelter => shelter.id === id);
  }
}

export interface Shelter {
  id: number;
  name: string;
  location: string;
}
