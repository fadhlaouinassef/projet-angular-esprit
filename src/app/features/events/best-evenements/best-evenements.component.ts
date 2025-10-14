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
    // Récupérer tous les événements et les filtrer pour les meilleurs
    // Les meilleurs événements sont ceux avec le plus petit nombre de places disponibles (plus exclusifs)
    this.listEvents = this.eventsService.events
      .filter(event => event.nbPlaces > 0) // Seulement les événements avec places disponibles
      .sort((a, b) => a.nbPlaces - b.nbPlaces); // Trier par nbPlaces croissant (moins de places = plus exclusif)
  }
}