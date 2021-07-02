import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BusModel } from '../BusList/Buses.model';
import { BusesService } from '../BusList/Buses.service';

@Component({
  selector: 'stop-page',
  templateUrl: './StopsPage.component.html',
})
export class StopsPageComponent implements OnInit {
  allBuses: BusModel[];
  activeBusstop: string | null;
  operatingBuses: BusModel[];
  shedule: { busNumber: number | null; departureIn: number }[];

  constructor(
    private busesService: BusesService,
    private route: ActivatedRoute
  ) {
    this.allBuses = this.busesService.getAllBuses();
    this.activeBusstop = null;
    this.operatingBuses = [];
    this.shedule = [];
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.activeBusstop = params.get('stop');
      this.allBuses.forEach((e) => {
        this.activeBusstop &&
          e.stops.includes(this.activeBusstop) &&
          this.operatingBuses.push(e);
      });
    });

    const sheduleTimer = Math.ceil(Math.random() * 10);

    for (let i: number = 0; i < 5; i++) {
      const random = Math.floor(Math.random() * this.operatingBuses.length);
      const chosenBus = this.operatingBuses[random].busNumber;
      const departureIn = sheduleTimer * i + 1;
      this.shedule.push({ busNumber: chosenBus, departureIn: departureIn });
    }
  }
}
