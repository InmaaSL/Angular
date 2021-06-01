import { Injectable } from '@angular/core';
import { IEvento } from '../interfaces/ievento';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  constructor() { }

  getEventos(): IEvento[]{
    return[
      {
        title: "Salimos a correr",
        image: "assets/correr.jpg",
        date: "2021-01-23",
        description: "Nos lo pasaremos genial",
        price: 5
      }, {
        title: "Sintamos la música",
        image: "assets/musica.jpeg",
        date: "2020-01-24",
        description: "Déjate llevar",
        price: 8.5
      },{
        title: "Papiroflexia",
        image: "assets/papiroflexia.jpg",
        date: "2021-01-30",
        description: "Encuentra lo que estás buscando",
        price: 1
      },{
        title: "Examen Angular",
        image: "assets/examen.jpg",
        date: "2021-06-23",
        description: "Sacaremos mínimo un 5",
        price: 100
      }
    ]
  }
}
