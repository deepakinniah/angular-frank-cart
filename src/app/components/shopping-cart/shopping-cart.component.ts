import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { RestAPIService } from 'src/app/services/rest/rest.service';

@Component({
  selector: 'shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent  {
  @Input() cars: any[];
  @Output() carRemoved = new EventEmitter();

  constructor(private r: RestAPIService) { 
  }

  calcTotal() {
    //return this.products.reduce((acc, prod) => acc+= prod.num ,0)
    var total = 0;
    if(this.cars){
      for (var i = 0; i < this.cars.length; i++) {
        total += this.cars[i].vehicleprice;
      }
    }
    return total;
  }
  removeCar(car) {
    this.r.deleteCartService(car.vehicleId).subscribe(t=>this.carRemoved.emit(car));
  }
}