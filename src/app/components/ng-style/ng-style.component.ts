import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
  <p [style.fontSize.px]="tamano">Hola mundo... esta es una  etiquita</p>

  <button class="btn btn-primary me-3" (click)="tamano = tamano + 5">
    <i class="fa fa-plus"></i>
  </button>

  <button class="btn btn-primary" (click)="tamano = tamano - 5">
    <i class="fa fa-minus"></i>
  </button>

  `,
  styles: []
})
export class NgStyleComponent {

  tamano:number = 10;

}
