import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys'
})
export class KeysPipe implements PipeTransform {

  transform(object: Object): string[] {
    let array = [],
        key;

    for (key in object) {
      array.push(object[key]);
    }
    return array;
  }

}
