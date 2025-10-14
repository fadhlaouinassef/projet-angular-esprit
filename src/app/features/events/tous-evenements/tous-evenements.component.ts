import { Component, OnInit } from '@angular/core';
import { Eventy } from '../../../model/eventy';
import { EventsService } from '../../../shared/service/events.service';

@Component({
  selector: 'app-tous-evenements',
  templateUrl: './tous-evenements.component.html',
  styleUrl: './tous-evenements.component.css'
})
export class TousEvenementsComponent implements OnInit {

  listEvents: Eventy[] = [];
  searchTerm: string = '';

  constructor(private eventsService: EventsService) { }

  ngOnInit() {
    // Récupérer tous les événements
    this.listEvents = this.eventsService.events;
  }
}