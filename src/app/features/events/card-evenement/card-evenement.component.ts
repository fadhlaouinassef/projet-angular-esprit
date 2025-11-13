import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Eventy } from '../../../model/eventy';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-evenement',
  templateUrl: './card-evenement.component.html',
  styleUrl: './card-evenement.component.css'
})
export class CardEvenementComponent {

  @Input() e: Eventy;
  @Output() notificationLike = new EventEmitter<Eventy>();

  constructor(private router: Router) { }

  goToDetails(eventId: number) {
    this.router.navigate(['/events/detail', eventId]);
  }

  participate(eventId: number, price: number) {
    this.router.navigate(['/events/participate', eventId, price]);
  }

  likeEvent(event: Eventy) {
    event.nbrLike++;
    this.notificationLike.emit(event);
  }
}
