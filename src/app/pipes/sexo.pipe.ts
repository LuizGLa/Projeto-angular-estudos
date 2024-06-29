import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sexo',
  standalone: true
})
export class SexoPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if (value == 'M') {
      return 'Masculino'
    } else if (value == 'F') {
      return 'Feminino'
    } else {
      return 'Outro'
    }
  }

}
