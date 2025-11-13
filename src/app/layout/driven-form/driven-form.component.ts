import { Component } from '@angular/core';

@Component({
  selector: 'app-driven-form',
  templateUrl: './driven-form.component.html',
  styleUrl: './driven-form.component.css'
})
export class DrivenFormComponent {
  save() {
    console.log('Form submitted');
  }
}
