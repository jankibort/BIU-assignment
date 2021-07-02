import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusBadgesComponent } from './AppContainer/BusList/BusBadges/BusBadges.component';
import { BusPageComponent } from './AppContainer/BusPage/BusPage.component';
import { StopsPageComponent } from './AppContainer/StopsPage/StopsPage.component';

const routes: Routes = [
  {
    path: 'stops/:stop',
    component: StopsPageComponent,
  },
  {
    path: 'bus/:bus',
    component: BusPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const ROUTING_COMPONENTS = [BusBadgesComponent, StopsPageComponent];
