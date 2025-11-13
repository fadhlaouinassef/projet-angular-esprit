import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Participation } from '../../../model/participation';

@Component({
  selector: 'app-participation-form',
  templateUrl: './participation-form.component.html',
  styleUrl: './participation-form.component.css'
})
export class ParticipationFormComponent implements OnInit {
  eventId: number;
  eventPrice: number;
  totalPrice: number = 0;
  showTotalPrice: boolean = false;

  // Modèle pour le formulaire
  participation: Participation = new Participation(
    1, // userId - à remplacer par l'utilisateur connecté
    0, // eventId - sera mis à jour
    '', // emailParticipant
    0, // nbPlaces
    'pending' // status
  );

  participations: Participation[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Récupérer les paramètres de l'URL
    this.eventId = +this.route.snapshot.paramMap.get('id')!;
    this.eventPrice = +this.route.snapshot.paramMap.get('price')!;
    this.participation.eventId = this.eventId;
  }

  calculateTotalPrice(): void {
    if (this.participation.nbPlaces > 0) {
      this.totalPrice = this.participation.nbPlaces * this.eventPrice;
      this.showTotalPrice = true;
    } else {
      this.showTotalPrice = false;
    }
  }

  onSubmit(): void {
    // Ajouter la participation à la liste
    const newParticipation = new Participation(
      this.participation.userId,
      this.participation.eventId,
      this.participation.emailParticipant,
      this.participation.nbPlaces,
      'confirmed'
    );
    this.participations.push(newParticipation);

    console.log('Participation ajoutée:', newParticipation);
    console.log('Liste des participations:', this.participations);

    // Réinitialiser le formulaire
    this.participation = new Participation(
      1,
      this.eventId,
      '',
      0,
      'pending'
    );
    this.showTotalPrice = false;
    this.totalPrice = 0;
  }
}
