import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing';
import { AppComponent } from './app.component';
import { RestAPIService } from './services/rest/rest.service';
import { AboutPageComponent } from './about-page/about-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AboutPageComponent,
    SearchPageComponent
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
