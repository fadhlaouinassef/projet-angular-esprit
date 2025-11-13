import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events.component';
import { ListEventComponent } from './list-event/list-event.component';
import { DetailEventComponent } from './detail-event/detail-event.component';
import { FormEvenementsComponent } from "./form-evenements/form-evenements.component";
import { ParticipationFormComponent } from './participation-form/participation-form.component';
const routes: Routes = [{ path: '', component: EventsComponent, children: [
            {path: '', component: ListEventComponent},
            {path: 'detail/:id', component: DetailEventComponent},
            {path: 'form-evenements', component: FormEvenementsComponent},
            {path: 'participate/:id/:price', component: ParticipationFormComponent}
]

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
