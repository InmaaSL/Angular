import { Component, OnInit } from '@angular/core';
import { IEvento } from '../interfaces/ievento';
import { EventosService } from '../services/eventos.service';

@Component({
  selector: 'app-eventos-show',
  templateUrl: './eventos-show.component.html',
  styleUrls: ['./eventos-show.component.css']
})

export class EventosShowComponent implements OnInit {
  //title = "Mi lista de eventos";

  filterSearch = "";
  ordenar =  "";

  misEventos: IEvento[] = [];

  evento!: IEvento;

  constructor( private EventosService: EventosService) { }

  ngOnInit(): void {
    this.EventosService.getEventos().subscribe( eventos => this.misEventos = eventos);
  }

  orderFecha(){
    this.ordenar = "date";
  }

  orderPrecio(){
    this.ordenar = "price";
  }

  form = "mt-4";

  addEvento(evento: IEvento){
    // this.eventos.push(Object.assign({}, this.newEvento));
    //Recorre el array, coge los valores y los que estén referenciados se guardan como valores propios.
    //this.misEventos.push({...this.evento});
    //this.misEventos = [...this.misEventos];
    this.misEventos = [...this.misEventos, evento];

    this.evento.title = '';
    this.evento.image = '';
    this.evento.description = '';
    this.evento.date = '';
    this.evento.price = 0;
  }

  eliminarEvento(evento: IEvento){
    this.misEventos = this.misEventos.filter(e=>e !== evento);
  }
}
