import { Component, OnInit} from '@angular/core';
import { RestAPIService } from 'src/app/services/rest/rest.service';

@Component({
  selector: 'search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit{
  status: any;
  constructor(private rest:RestAPIService){
  }
  ngOnInit() {
  }

  loadAllCars(event){
    this.rest.getCarService("/loadAllCars").subscribe(t=>{this.status=t;console.log(this.status)});
  }
}
