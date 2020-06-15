import { Component} from '@angular/core';
import { RestAPIService } from 'src/app/services/rest/rest.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent  {
  car: any;
  carId: number
  constructor(private ar : ActivatedRoute, private rest: RestAPIService) { 
    this.carId=this.ar.snapshot.params['id'];
    rest.getCarService("/getbyid/"+this.carId).subscribe(t=>{this.car=t;});
  }
  ngOnInit() {
  }
}