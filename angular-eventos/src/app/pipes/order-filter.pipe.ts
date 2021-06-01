import { Pipe, PipeTransform } from '@angular/core';
import { IEvento } from '../interfaces/ievento';

@Pipe({
  name: 'orderFilter'
})

export class OrderFilterPipe implements PipeTransform {
    transform(value: IEvento[], ord: string): IEvento[] {
        value.sort((a: any,b: any) => {if(a[ord] < b[ord]) {
          return -1;
        }else if(a[ord] > b[ord]) {
          return 1;
        }else {}
          return 0;
      })
    return value;
    }

}
