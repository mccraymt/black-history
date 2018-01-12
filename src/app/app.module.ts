import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './components/app/app.component';
import { AppNavbarComponent } from './components/app-navbar/app-navbar.component';
import { ApiService } from './services/api.service';
import { AppRoutingModule } from './modules/app-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FlashCardsComponent } from './components/flash-cards/flash-cards.component';
import { FlashCardDetailComponent } from './components/flash-card-detail/flash-card-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    DashboardComponent,
    FlashCardsComponent,
    FlashCardDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
