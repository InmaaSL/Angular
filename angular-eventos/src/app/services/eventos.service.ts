import { Injectable } from '@angular/core';
import { IEvento } from '../interfaces/ievento';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { EventosResponse } from '../interfaces/eventos-response';


@Injectable({
  providedIn: 'root'
})
export class EventosService {

  constructor(private http: HttpClient) { }

  getEventos(): Observable<IEvento[]> {
    return this.http.get<EventosResponse>(`/eventos`).pipe(
    map(resp => resp.eventos)
    );
  }

}
