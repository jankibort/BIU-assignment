import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StopsService {
  private allStops = [
    'Oliwska',
    'Osowska',
    'Sopocka',
    'Letniskowa',
    'Ogniskowa',
    'Browarna',
  ];

  public getAllStops(): string[] {
    return this.allStops;
  }
}
