import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchPageComponent } from './search-page/search-page.component';
import { AboutPageComponent } from './about-page/about-page.component';


const routes: Routes = [
  { path: 'home', component:  SearchPageComponent},
  { path: 'about', component:  AboutPageComponent},
  { path: '', component: SearchPageComponent },
	{ path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
