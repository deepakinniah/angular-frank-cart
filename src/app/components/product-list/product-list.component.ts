import { Component, OnInit, Output, Input, EventEmitter} from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { 
  }

  ngOnInit(): void {
  }

  @Input() cars: any[];
  @Output() carAdded = new EventEmitter();
  addCarToCart(car) {
    this.carAdded.emit(car);
  }

}
