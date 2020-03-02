import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderByPipe'
})
export class OrderByPipe implements PipeTransform {

  transform(array: any[], field: string, dir: string): any[] {
    let val: number;
    if ( dir === 'true' ) { val = -1; } else { val = 1; }
    console.log(val);
    console.log(dir);
    if (!Array.isArray(array)) {
      return array;
    }
    array.sort((a: any, b: any) => {
      if (a[field] < b[field]) {
        return val;
      } else if (a[field] > b[field]) {
        return -val;
      } else {
        return 0;
      }
    });
    return array;
  }

}
