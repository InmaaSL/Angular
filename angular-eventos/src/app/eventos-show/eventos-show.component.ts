import { Component, OnInit } from '@angular/core';
import { IEvento } from '../interfaces/ievento';

@Component({
  selector: 'app-eventos-show',
  templateUrl: './eventos-show.component.html',
  styleUrls: ['./eventos-show.component.css']
})

export class EventosShowComponent implements OnInit {
  //title = "Mi lista de eventos";

  filterSearch = "";
  ordenar =  "";

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
      image: "assets/examen.jpg",
      date: "2021-06-23",
      description: "Sacaremos mínimo un 5",
      price: 100
    }
  ];

  nuevoEvento: IEvento = {
    title: '',
    image: '',
    date: '',
    description: '',
    price: 0
  }


  constructor() { }

  ngOnInit(): void {
  }

  orderFecha(){
    this.ordenar = "date";
  }

  orderPrecio(){
    this.ordenar = "price";
  }

  form = "mt-4";

  addEvento(){
    // this.eventos.push(Object.assign({}, this.newEvento));
    //Recorre el array, coge los valores y los que estén referenciados se guardan como valores propios.
    this.misEventos.push({...this.nuevoEvento});
    this.misEventos = [...this.misEventos];

    this.nuevoEvento.title = '';
    this.nuevoEvento.image = '';
    this.nuevoEvento.description = '';
    this.nuevoEvento.date = '';
    this.nuevoEvento.price = 0;
  }

  changeImage(fileInput: HTMLInputElement) {
    if (!fileInput.files || fileInput.files.length === 0) { return; }
      const reader: FileReader = new FileReader();
      reader.readAsDataURL(fileInput.files[0]);
      reader.addEventListener('loadend', e => {
      this.nuevoEvento.image = reader.result as string;
    });
  }

}
