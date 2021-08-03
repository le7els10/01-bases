import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: 'heroe.component.html',
})
export class HeroeComponent {
  nombre: string = 'Iron man';
  age: number = 45;

  obtenerNomber = (): string => {
    return `${this.nombre} ${this.age} `;
  };

  get capitalized(): string {
    return this.nombre.toUpperCase();
  }

  cambiarNombre = (): void => {
    this.nombre = 'spiderman';
  };

  cambiarEdad = (): void => {
    this.age = 30;
  };
}
