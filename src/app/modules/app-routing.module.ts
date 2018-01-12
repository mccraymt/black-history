import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { FlashCardsComponent } from '../components/flash-cards/flash-cards.component';
import { FlashCardDetailComponent } from '../components/flash-card-detail/flash-card-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'flash-cards/:id', component: FlashCardDetailComponent },
  { path: 'flash-cards', component: FlashCardsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
