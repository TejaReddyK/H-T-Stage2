import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Categories, IProduct } from '../product/product-list/product';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnChanges{
 
  title:string='';

  ngOnChanges(changes: SimpleChanges): void {
     
  }

  @Input() cartList:IProduct[]=[];

  ratingClick(msg:string):void{
    // console.log('inside product click')
    this.title = msg;
  }

  
}