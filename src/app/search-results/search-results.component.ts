import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { RestAPIService } from 'src/app/services/rest/rest.service';

@Component({
  selector: 'search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent {
  carList: any;
  cartList: any;
  search: any;

  constructor(private r: RestAPIService, private activatedRoute: ActivatedRoute) { 
    this.activatedRoute.queryParams.subscribe(params => {
      const search = params['search'];
      this.search = search;
    });
    if(this.search && Number(this.search) && this.search%1 ===0){
      r.getCarService("wh/"+this.search).subscribe(t=>{this.carList=t;});
    }
    else{
      r.getCarService("orderByVehicleId").subscribe(t=>{this.carList=t;});
      this.search = '';
    }
  }

  public sortOrFilterCall(event,param) {
   this.r.getCarService(param).subscribe(t=>{this.carList=t;});
  }

}
