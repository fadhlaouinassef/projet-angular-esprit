import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventsService } from '../services/events.service';
import { Router } from '@angular/router';
import { futurDateValidator } from '../../../shared/validators/futur-date.validator';

@Component({
  selector: 'app-form-evenements',
  templateUrl: './form-evenements.component.html',
  styleUrls: ['./form-evenements.component.css']
})
export class FormEvenementsComponent {
  eventForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private eventsService: EventsService,
    private router: Router
  ) {
    this.eventForm = this.fb.group({
      title: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('^[a-zA-Z ]*$')
      ]],
      description: ['', [
        Validators.required,
        Validators.minLength(30)
      ]],
      date: ['', [
        Validators.required,
        futurDateValidator(7)
      ]],
      price: ['', [
        Validators.required,
        Validators.pattern('^\\d+(\\.\\d+)?$')
      ]],
      places: ['', [
        Validators.required,
        Validators.pattern('^[1-9][0-9]?$|^100$')
      ]],
      location: ['', Validators.required],
      imageUrl: [''] // optionnel
    });
  }

  onSubmit() {
    if (this.eventForm.valid) {
      const newEvent = {
        title: this.eventForm.value.title,
        description: this.eventForm.value.description,
        date: new Date(this.eventForm.value.date),
        location: this.eventForm.value.location,
        price: Number(this.eventForm.value.price),
        nbPlaces: Number(this.eventForm.value.places),
        imageUrl: this.eventForm.value.imageUrl || 'https://via.placeholder.com/300'
      };
      this.eventsService.addEvent(newEvent);
      this.router.navigate(['/events']);
    }
  }
}
