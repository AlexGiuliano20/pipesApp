import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent {
  nombreLower: string = 'alex';
  nombreUpper: string = 'ALEX';
  nombreCompleto: string = 'aLeX GIuliANo';
}
