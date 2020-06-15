import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RestAPIService } from 'src/app/services/rest/rest.service';

@Component({
  selector: 'search-results',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent  {
  cartList: any;
  constructor(private rest: RestAPIService) { 
    rest.getCartService("orderByPriceDesc").subscribe(t=>{this.cartList=t;});
  }
  calcTotal() {
    var total = 0;
    if(this.cartList){
      for (var i = 0; i < this.cartList.length; i++) {
        total += this.cartList[i].vehicleprice;
      }
    }
    return total;
  }
}