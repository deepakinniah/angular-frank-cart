import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchPageComponent } from './search-page/search-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { CarDetailsComponent } from './car-details/car-details.component';


const routes: Routes = [
  { path: 'home', component:  SearchPageComponent},
  { path: 'about', component:  AboutPageComponent},
  { path: 'cars', component: SearchResultsComponent },
  { path:'carDetails/:id',component:CarDetailsComponent},
  { path: '', component: SearchPageComponent },
	{ path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
