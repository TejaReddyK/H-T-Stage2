import { Component } from "@angular/core";
import { IProduct } from "./product/product-list/product";

@Component({
  selector:'app',
  templateUrl:'./app.component.html',
  styleUrls:['./app.component.css']
})
export class AppComponent{
  
  pageTitle:string = 'my angular app';

  cartProducts:IProduct[]=[];

  receiveEmittedProduct(obj:IProduct){
      console.log(JSON.stringify(obj));
      this.cartProducts=[...this.cartProducts,obj];

  }

}