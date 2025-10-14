import { Component } from '@angular/core';

@Component({
  selector: 'app-evenements-selection',
  templateUrl: './evenements-selection.component.html',
  styleUrl: './evenements-selection.component.css'
})
export class EvenementsSelectionComponent {

  selectedEventType: string = '';
  
  constructor() { }

}