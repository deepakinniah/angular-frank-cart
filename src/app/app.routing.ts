import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {SearchResultsComponent} from './components/search-results/search-results.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import {AboutPageComponent} from './components/about-page/about-page.component';
import { CarDetailsComponent } from './components/car-details/car-details.component';
import { CheckoutPageComponent } from './components/checkout-page/checkout-page.component';

export const routes: Routes = [
	
    { path: 'home', component:  SearchPageComponent},
    { path: 'about', component:  AboutPageComponent},
    { path: 'cars', component: SearchResultsComponent },
    { path:'carDetails/:id',component:CarDetailsComponent},
    { path: 'checkout', component: CheckoutPageComponent },
    { path: '', component: SearchPageComponent },
	  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
