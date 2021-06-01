import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IEvento } from '../interfaces/ievento';

@Component({
  selector: 'evento-add',
  templateUrl: './evento-add.component.html',
  styleUrls: ['./evento-add.component.css']
})
export class EventoAddComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.resetForm();
  }
  
  eventoNuevo!: IEvento;
  nombreImagen!: string;

  @Output() newItemEvent = new EventEmitter<IEvento>();

  crearEventoNuevo(){
    this.newItemEvent.emit(this.eventoNuevo);
    this.resetForm();
  }

  changeImage(fileInput: HTMLInputElement) {
    if (!fileInput.files || fileInput.files.length === 0) { return; }
      const reader: FileReader = new FileReader();
      reader.readAsDataURL(fileInput.files[0]);
      reader.addEventListener('loadend', e => {
      this.eventoNuevo.image = reader.result as string;
    });
  }

  private resetForm(){
    this.eventoNuevo = {
      title: '',
      description: '',
      image: '',
      price: 0,
      date: ''
    }
  }

}
