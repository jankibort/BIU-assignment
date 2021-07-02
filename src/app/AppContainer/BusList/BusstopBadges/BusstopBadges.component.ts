import { Component, Input } from '@angular/core';

@Component({
  selector: 'busstop-badges',
  templateUrl: './BusstopBadges.component.html',
  styleUrls: ['../BusList.component.scss'],
})
export class BusstopBadgesComponent {
  @Input() allBusstops: string[] = [];
}
