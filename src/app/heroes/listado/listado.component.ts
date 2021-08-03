import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ['Spider-man', 'Ironman', 'Batman', 'Thor', 'Black widow'];
  deleted: string = '';

  delete = (): void => {
    let popped = this.heroes.pop();
    this.deleted = popped ? popped : '';
  };
}
