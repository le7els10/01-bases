import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{ title }}</h1>
    <h3>
      La base es <strong>{{ base }}</strong>
    </h3>
    <button (click)="sumar(true)">+{{ base }}</button>
    <span>{{ numero }}</span>
    <button (click)="sumar(false)">-{{ base }}</button>
  `,
})
export class ContadorComponent {
  title = 'Contador app';
  numero: number = 10;
  base: number = 5;

  sumar = (isSum: boolean = false) => {
    if (isSum) {
      this.numero += this.base;
    } else {
      this.numero -= this.base;
    }
  };
}
