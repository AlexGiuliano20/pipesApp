import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  nombre: string = 'alex giuliano';
  valor: number = 1000;
  obj = {
    nombre: 'Alex',
  };

  mostrarNombre(): void {
    console.log(this.nombre);
    console.log(this.valor);
    console.log(this.obj);
  }
  constructor(private _primengConfig: PrimeNGConfig) {}

  ngOnInit(): void {
    this._primengConfig.ripple = true;
  }
}
