import { Injectable } from '@angular/core';
import { Eventy } from '../../../model/eventy';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  events: Eventy[] = [
      {
        id: 1,
        title: 'Angular Summit',
        description: 'Conference sur Angular et ecosysteme front-end.',
        date: new Date('2025-11-10'),
        location: 'Tunis',
        price: 50,
        organizerId: 101,
        imageUrl: 'https://m.media-amazon.com/images/I/71vC4ryHjOL._UF1000,1000_QL80_.jpg',
        nbPlaces: 25,
        nbrLike: 1
      },
      {
        id: 2,
        title: 'Web Dev Days',
        description: 'Journee dediee aux frameworks web modernes.',
        date: new Date('2025-01-05'),
        location: 'Ariana',
        price: 30,
        organizerId: 102,
        imageUrl: 'https://cdn.dribbble.com/userupload/37287941/file/original-a59d13499667b765fb5aceb8b5d5bf0d.jpg',
        nbPlaces: 0,
        nbrLike: 3
      },
      {
        id: 3,
        title: 'React Conference',
        description: 'Conference dediee aux developpeurs React et ecosysteme.',
        date: new Date('2025-12-15'),
        location: 'Sfax',
        price: 75,
        organizerId: 103,
        imageUrl: 'https://miro.medium.com/v2/resize:fit:1200/1*y6C4nSvy2Woe0m7bWEn4BA.png',
        nbPlaces: 5,
        nbrLike: 2
      },
      {
        id: 4,
        title: 'React Conference',
        description: 'Conference dediee aux developpeurs React et ecosysteme.',
        date: new Date('2025-12-15'),
        location: 'Sfax',
        price: 75,
        organizerId: 103,
        imageUrl: 'https://miro.medium.com/v2/resize:fit:1200/1*y6C4nSvy2Woe0m7bWEn4BA.png',
        nbPlaces: 3,
        nbrLike: 8
      },
      {
        id: 5,
        title: 'React Conference',
        description: 'Conference dediee aux developpeurs React et ecosysteme.',
        date: new Date('2025-12-15'),
        location: 'Sfax',
        price: 75,
        organizerId: 103,
        imageUrl: 'https://miro.medium.com/v2/resize:fit:1200/1*y6C4nSvy2Woe0m7bWEn4BA.png',
        nbPlaces: 6,
        nbrLike: 7
      }
    ];

  constructor() { }

  addEvent(event: Omit<Eventy, 'id' | 'nbrLike' | 'organizerId'>): void {
    const newEvent: Eventy = {
      ...event,
      id: this.getNextId(),
      nbrLike: 0,
      organizerId: 1
    };
    this.events.push(newEvent);
  }

  getNextId(): number {
    return Math.max(...this.events.map(e => e.id), 0) + 1;
  }

  getEvents(): Eventy[] {
    return this.events;
  }
}
