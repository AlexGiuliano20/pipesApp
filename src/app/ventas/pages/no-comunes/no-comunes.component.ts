import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [],
})
export class NoComunesComponent {
  // i18nSelect
  nombre: string = 'Susana';
  genero: string = 'femenino';

  invitacionMap = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
  };

  //i18nPlural
  clientes: string[] = [
    'Maria',
    'Pedro',
    'Juan',
    'Ramón',
    'Ricardo',
    'San Martin',
  ];
  clientesMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    other: 'tenemos # clientes esperando.',
  };

  cambiarCliente(): void {
    this.nombre == 'Susana'
      ? ((this.nombre = 'Alex'), (this.genero = 'masculino'))
      : ((this.nombre = 'Susana'), (this.genero = 'femenino'));
  }

  borrarCliente(): void {
    this.clientes.pop();
  }

  // KeyValue Pipe
  persona = {
    nombre: 'Alex',
    edad: 21,
    direccion: 'Bs As, Argentina',
  };

  // Json Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true,
    },
    {
      nombre: 'Robin',
      vuela: false,
    },
    {
      nombre: 'Aquaman',
      vuela: false,
    },
  ];

  // Async Pipe
  miObservable = interval(2000);

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('La promesa ha sido resuelta!');
    }, 3500);
  });
}
