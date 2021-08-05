import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {
  private _personajes: Personaje[] = [
    {
      name: 'Goku',
      power: 20000,
    },
    {
      name: 'Pan',
      power: 5000,
    },
  ];

  get personajes(): Personaje[] {
    return [...this._personajes];
  }

  constructor() {}

  add = (personaje: Personaje) => {
    this._personajes.push(personaje);
  };
}
