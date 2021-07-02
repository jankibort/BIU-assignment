import { Component } from '@angular/core';

@Component({
  selector: 'report-form',
  templateUrl: './ReportForm.component.html',
})
export class ReportFormComponent {
  email: string;
  message: string;

  constructor() {
    this.email = '';
    this.message = '';
  }

  onSubmit() {
    alert('Dziekujemy za wsparcie ! :)');
  }
}
