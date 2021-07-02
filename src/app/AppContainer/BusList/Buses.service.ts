import { Injectable } from '@angular/core';
import { BusModel } from './Buses.model';
import { Busstops } from './Busstop.model';

@Injectable({
  providedIn: 'root',
})
export class BusesService {
  private bus169 = new BusModel(169, [
    Busstops.Letniskowa,
    Busstops.Ogniskowa,
    Busstops.Browarna,
  ]);

  private bus210 = new BusModel(210, [Busstops.Letniskowa, Busstops.Ogniskowa]);

  private bus199 = new BusModel(199, [
    Busstops.Letniskowa,
    Busstops.Sopocka,
    Busstops.Osowska,
  ]);

  private bus179 = new BusModel(179, [Busstops.Ogniskowa, Busstops.Osowska]);

  private bus122 = new BusModel(122, [
    Busstops.Sopocka,
    Busstops.Oliwska,
    Busstops.Osowska,
  ]);

  private buses = [
    this.bus122,
    this.bus169,
    this.bus179,
    this.bus199,
    this.bus210,
  ];

  public getAllBuses(): BusModel[] {
    return this.buses;
  }

  public getAllBusNumbers(): number[] {
    return [122, 169, 179, 199, 210];
  }

  public getBus(number: number) {
    switch (number) {
      case (number = 169):
        return this.bus169;
      case (number = 179):
        return this.bus179;
      case (number = 199):
        return this.bus199;
      case (number = 122):
        return this.bus122;
      case (number = 210):
        return this.bus210;
      default:
        return undefined;
    }
  }
}
