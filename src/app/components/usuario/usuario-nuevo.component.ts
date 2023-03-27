import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  template: `
  <h1>Usuario Nuevo</h1>
  `,
  styles: []
})
export class UsuarioNuevoComponent {

  constructor(private router: ActivatedRoute ){
    this.router.parent?.params.subscribe( parametros => {
      console.log('RUTA HIJA Usuario Nuevo');
      console.log(parametros);
    })
  }

}
