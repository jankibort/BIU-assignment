import { Busstops } from './Busstop.model';

export class BusModel {
  id: string;
  busNumber: number | null;
  stops: string[];

  constructor(busNumber: number, stops: Busstops[]) {
    this.id = 'bus' + busNumber;
    this.busNumber = busNumber;
    this.stops = stops;
  }
}
