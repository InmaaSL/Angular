import { Pipe, PipeTransform } from '@angular/core';
import { IEvento } from '../interfaces/ievento';

@Pipe({
  name: 'eventFilter'
})
export class EventFilterPipe implements PipeTransform {

  transform(eventos: IEvento[], filterBy: string): IEvento[] {
    const filter = filterBy ? filterBy.toLocaleLowerCase() : null;
    if (filter){
      return eventos.filter(event => event.title.toLocaleLowerCase().includes(filter))
    }
    return eventos;
  }

}
