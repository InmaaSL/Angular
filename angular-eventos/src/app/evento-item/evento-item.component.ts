import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IEvento } from '../interfaces/ievento';

@Component({
  selector: 'evento-item',
  templateUrl: './evento-item.component.html',
  styleUrls: ['./evento-item.component.css']
})

export class EventoItemComponent implements OnInit {

  @Input() eventos!: IEvento;
  @Output() deleteEvent = new EventEmitter<void>();

  deleteEvento(){
    this.deleteEvent.emit();
  }

  constructor() { }

  ngOnInit(): void {
  }


}
