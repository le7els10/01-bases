import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {
  @Input() data: Personaje = {
    name: '',
    power: 0,
  };

  // @Output() newPersonaje: EventEmitter<Personaje> = new EventEmitter();

  constructor(private dbzService: DbzService) {}

  add = () => {
    const { name } = this.data;

    if (name.trim().length === 0) {
      return;
    }

    this.dbzService.add(this.data);

    // this.newPersonaje.emit(this.data);

    this.clean();
  };

  clean = () => {
    this.data = {
      name: '',
      power: 0,
    };
  };
}
