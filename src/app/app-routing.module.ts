import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BikeDetailComponent } from './components/bike-detail/bike-detail.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'bike/:bikeId', component: BikeDetailComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: false,
      relativeLinkResolution: 'legacy',
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
