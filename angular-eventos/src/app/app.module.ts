import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EventosShowComponent } from './eventos-show/eventos-show.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { EventFilterPipe } from './pipes/event-filter.pipe';
import { OrderFilterPipe } from './pipes/order-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    EventosShowComponent,
    EventFilterPipe,
    OrderFilterPipe
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
