import { Component } from '@angular/core';

@Component({
  selector: 'site-footer',
  templateUrl: './Footer.component.html',
  styleUrls: ['./Footer.component.scss'],
})
export class FooterComponent {
  authorName: string = 'Kibort Jan';
  indexNumber: string = 's19916';
}
