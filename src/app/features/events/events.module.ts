import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import { ListEventComponent } from './list-event/list-event.component';
import { DetailEventComponent } from './detail-event/detail-event.component';
import { CardEvenementComponent } from './card-evenement/card-evenement.component';
import { BestEvenementsComponent } from './best-evenements/best-evenements.component';
import { TousEvenementsComponent } from './tous-evenements/tous-evenements.component';
import { EvenementsSelectionComponent } from './evenements-selection/evenements-selection.component';

@NgModule({
  declarations: [
    EventsComponent,
    ListEventComponent,
    DetailEventComponent,
    CardEvenementComponent,
    BestEvenementsComponent,
    TousEvenementsComponent,
    EvenementsSelectionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    EventsRoutingModule
  ]
})
export class EventsModule { }
