import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, ROUTING_COMPONENTS } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppContainerComponent } from './AppContainer/AppContainer.component';
import { BusBadgesComponent } from './AppContainer/BusList/BusBadges/BusBadges.component';
import { BusListComponent } from './AppContainer/BusList/BusList.component';
import { BusstopBadgesComponent } from './AppContainer/BusList/BusstopBadges/BusstopBadges.component';
import { FooterComponent } from './Footer/Footer.component';
import { ReportBugComponent } from './Topbar/ReportBug/ReportBug.component';
import { ReportFormComponent } from './Topbar/ReportBug/ReportForm/ReportForm.component';
import { TopbarComponent } from './Topbar/Topbar.component';

@NgModule({
  declarations: [
    ROUTING_COMPONENTS,
    ReportBugComponent,
    ReportFormComponent,
    AppComponent,
    FooterComponent,
    TopbarComponent,
    AppContainerComponent,
    BusListComponent,
    BusstopBadgesComponent,
    BusBadgesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
