import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'join'
})
export class JoinPipe implements PipeTransform {

  transform(array: string[], separator: string, start?: number, end?: number): string {
    let result: Array<string>;

    if (array !== undefined) {
      if (start !== undefined && end !== undefined) {
        result = array.slice(start, end);
      } else if (start !== undefined) {
        result = array.slice(start);
      } else {
        result = array;
      }
      return result.join(separator);
    } else {
      return null;
    }
  }

}
