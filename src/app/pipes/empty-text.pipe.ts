import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emptyText'
})
export class EmptyTextPipe implements PipeTransform {

  transform(value: any, emptyText: any): any {
    if (value !== undefined) {
      if (!value) {
        return emptyText;
      } else {
        return value;
      }
    } else {
      return null;
    }
  }

}
