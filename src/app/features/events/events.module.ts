import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import { ListEventComponent } from './list-event/list-event.component';
import { DetailEventComponent } from './detail-event/detail-event.component';
import { CardEvenementComponent } from './card-evenement/card-evenement.component';
import { BestEvenementsComponent } from './best-evenements/best-evenements.component';
import { TousEvenementsComponent } from './tous-evenements/tous-evenements.component';
import { EvenementsSelectionComponent } from './evenements-selection/evenements-selection.component';
import { OrderByLikesPipe } from '../../shared/pipes/order-by-likes.pipe';
import { ChangebackgroundDirective } from '../../shared/Directives/changebackground.directive';
import { FormEvenementsComponent } from './form-evenements/form-evenements.component';
import { ParticipationFormComponent } from './participation-form/participation-form.component';

@NgModule({
  declarations: [
    EventsComponent,
    ListEventComponent,
    DetailEventComponent,
    CardEvenementComponent,
    BestEvenementsComponent,
    TousEvenementsComponent,
    EvenementsSelectionComponent,
    OrderByLikesPipe,
    ChangebackgroundDirective,
    FormEvenementsComponent,
    ParticipationFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EventsRoutingModule
  ]
})
export class EventsModule { }
