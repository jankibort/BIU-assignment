import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BusModel } from '../BusList/Buses.model';
import { BusesService } from '../BusList/Buses.service';

@Component({
  selector: 'bus-page',
  templateUrl: './BusPage.component.html',
})
export class BusPageComponent implements OnInit {
  activeBusNumber: number;
  activeBus: BusModel | undefined;

  constructor(
    private route: ActivatedRoute,
    private busesService: BusesService
  ) {
    this.activeBusNumber = 0;
    this.activeBus = undefined;
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.activeBusNumber = +(params.get('bus') || 0);
      this.activeBus = this.busesService.getBus(this.activeBusNumber);
    });
  }
}
