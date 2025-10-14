import { Component, Input } from '@angular/core';
import { Eventy } from '../../../model/eventy';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-evenement',
  templateUrl: './card-evenement.component.html',
  styleUrl: './card-evenement.component.css'
})
export class CardEvenementComponent {

  @Input() e: Eventy;

  constructor(private router: Router) { }

  goToDetails(eventId: number) {
    this.router.navigate(['/events/detail', eventId]);
  }
}