import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  private userDatabase: User[] = [
    {
      id: 0,
      username: 'Gabriel',
      email: 'normal@user.com',
      password: 'password',
    },
    {
      id: 1,
      username: 'Abrantes',
      email: 'shelter_owner@user.com',
      password: 'password',
    },
  ];
  subject: BehaviorSubject<User | undefined> = 
    new BehaviorSubject<User | undefined>(undefined);

  constructor(private http: HttpClient) {}

  login(email: string, password: string): User | undefined {
    let user = this.userDatabase.find(
      (user) => user.email === email && user.password === password
    );

    if (user == undefined) return undefined;
    else {
      this.subject.next(user);
      return user;
    }
  }

  getLoggedUser(): User | undefined {
    return this.subject.value;
  }
}

export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
}
