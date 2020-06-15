import { TestBed, fakeAsync, tick  } from '@angular/core/testing';
import { Location } from "@angular/common";
import {RouterTestingModule} from "@angular/router/testing";
import { routes } from './app.routing';
import { Router } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { CarDetailsComponent } from './components/car-details/car-details.component';
import { CheckoutPageComponent } from './components/checkout-page/checkout-page.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SearchPageComponent } from './components/search-page/search-page.component';

describe('AppRoutingModule', () => {
  let location: Location;
  let router: Router;
  let fixture;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      declarations: [
        SearchPageComponent,
        AboutPageComponent,
        SearchResultsComponent,
        CheckoutPageComponent,
        CarDetailsComponent
      ]
    });
    router = TestBed.get(Router);
    location = TestBed.get(Location);

    fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation();
  });

  it('navigate to "" redirects you to /home', fakeAsync(() => {
    router.navigate(["/home"]).then(() => {
      tick(15000);
      expect(location.path()).toBe("/home");
    });
  }));

  it('navigate to "search" takes you to /about', fakeAsync(() => {
    router.navigate(["/about"]).then(() => {
      tick(15000);
      expect(location.path()).toBe("/about");
    });
  }));

  it('navigate to "search" takes you to /cars', fakeAsync(() => {
    router.navigate(["/cars"]).then(() => {
      tick(15000);
      expect(location.path()).toBe("/cars");
    });
  }));

  it('navigate to "search" takes you to /checkout', fakeAsync(() => {
    router.navigate(["/checkout"]).then(() => {
      tick(15000);
      expect(location.path()).toBe("/checkout");
    });
  }));

  it('navigate to "search" takes you to /carDetails/1', fakeAsync(() => {
    router.navigate(["/carDetails/1"]).then(() => {
      tick(15000);
      expect(location.path()).toBe("/carDetails/1");
    });
  }));

});
