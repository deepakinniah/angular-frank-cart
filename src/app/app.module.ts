import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing';
import { AppComponent } from './app.component';
import { RestAPIService } from './services/rest/rest.service';
import { AboutPageComponent } from './about-page/about-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './product/product.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CarDetailsComponent } from './car-details/car-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutPageComponent,
    SearchPageComponent,
    SearchResultsComponent,
    ProductListComponent,
    ProductComponent,
    CarDetailsComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    AppRoutingModule 
  ],
  providers: [RestAPIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
