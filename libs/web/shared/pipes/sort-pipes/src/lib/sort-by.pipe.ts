import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy',
})
export class SortByPipe implements PipeTransform {
  transform(array: string[], day: number): Array<string> {
    const firstHalf = array.slice(0, day);
    const secondHalf = array.slice(day, array.length);
    return [...secondHalf, ...firstHalf];
  }
}
