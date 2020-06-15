import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent  {
  @Input() car: any;
  @Output() carAdded = new EventEmitter();
  addCarToCart(car) {
    this.carAdded.emit(car);
  }
}