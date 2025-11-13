import { Component, OnInit } from '@angular/core';
import { Eventy } from '../../../model/eventy';
import { EventsService } from '../../../shared/service/events.service';

@Component({
  selector: 'app-best-evenements',
  templateUrl: './best-evenements.component.html',
  styleUrl: './best-evenements.component.css'
})
export class BestEvenementsComponent implements OnInit {

  listEvents: Eventy[] = [];
  searchTerm: string = '';

  constructor(private eventsService: EventsService) { }

  ngOnInit() {
    this.listEvents = this.eventsService.events
      .filter(event => event.nbPlaces > 0)
      .sort((a, b) => a.nbPlaces - b.nbPlaces)
      .map(event => ({...event, isBest: true}));   
  }
}