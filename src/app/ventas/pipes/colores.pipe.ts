import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'colores',
})
export class ColoresPipe implements PipeTransform {
  transform(value: number): string {
    switch (value) {
      case 0:
        return 'rojo';
      case 1:
        return 'negro';
      case 2:
        return 'azul';
      case 3:
        return 'verde';
      default:
        return 'sarasa';
    }
  }
}
