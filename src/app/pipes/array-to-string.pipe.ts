import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayToString',
})
export class ArrayToStringPipe implements PipeTransform {
  transform(input: Array<string>, sep = ' and '): string {
    return input.join(sep);
  }
}
