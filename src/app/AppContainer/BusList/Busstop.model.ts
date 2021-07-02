export class BustopModel {
  name: Busstops;
  busesPassingStop: number;

  constructor(name: Busstops, busesPassingStop: number) {
    this.busesPassingStop = busesPassingStop;
    this.name = name;
  }

  getName() {
    return this.name;
  }

  getBussesPassingStop() {
    return this.busesPassingStop;
  }
}

export enum Busstops {
  Oliwska = 'Oliwska',
  Osowska = 'Osowska',
  Sopocka = 'Sopocka',
  Letniskowa = 'Letniskowa',
  Ogniskowa = 'Ogniskowa',
  Browarna = 'Browarna',
}
