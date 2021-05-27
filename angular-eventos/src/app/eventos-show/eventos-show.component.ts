import { Component, OnInit } from '@angular/core';
import { IEvento } from '../interfaces/ievento';

@Component({
  selector: 'app-eventos-show',
  templateUrl: './eventos-show.component.html',
  styleUrls: ['./eventos-show.component.css']
})

export class EventosShowComponent implements OnInit {
  //title = "Mi lista de eventos";

  misEventos: IEvento[] = [
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
      image: "assets/pajaros.jpg",
      date: "2021-06-23",
      description: "Sacaremos mínimo un 5",
      price: 100
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
