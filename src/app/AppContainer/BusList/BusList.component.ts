import { Component } from '@angular/core';
import { BusesService } from './Buses.service';
import { StopsService } from './Stops.service';

@Component({
  selector: 'bus-list',
  templateUrl: './BusList.component.html',
  styleUrls: ['./BusList.component.scss'],
})
export class BusListComponent {
  allBuses: number[];
  allBusstops: string[];

  constructor(private buses: BusesService, private stops: StopsService) {
    this.allBuses = this.buses.getAllBusNumbers();
    this.allBusstops = this.stops.getAllStops();
  }
}
