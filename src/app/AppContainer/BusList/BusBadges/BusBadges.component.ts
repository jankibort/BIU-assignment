import { Component, Input } from '@angular/core';

@Component({
  selector: 'bus-badges',
  templateUrl: './BusBadges.component.html',
  styleUrls: ['../BusList.component.scss'],
})
export class BusBadgesComponent {
  @Input() allBuses: number[] = [];
}
