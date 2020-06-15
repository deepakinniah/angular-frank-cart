import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ProductComponent } from './components/product/product.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { SearchPageComponent } from './components/search-page/search-page.component';

import { RestAPIService } from './services/rest/rest.service';
import { CarDetailsComponent } from './components/car-details/car-details.component';
import { CheckoutPageComponent } from './components/checkout-page/checkout-page.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutPageComponent,
    SearchPageComponent,
    SearchResultsComponent,
    ProductListComponent,
    ProductComponent,
    ShoppingCartComponent,    
    CarDetailsComponent,
    CheckoutPageComponent 
  ],
  imports: [
    BrowserModule,HttpClientModule, AppRoutingModule 
  ],
  providers: [RestAPIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
