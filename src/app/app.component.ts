import { Component } from "@angular/core";

import { IProduct } from "./products/product-list/product";

@Component({
  selector:'app',
  templateUrl:'./app.component.html',
  styleUrls:['./app.component.css']
})

export class AppComponent{
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  pageTitle:string = 'my angular app';

  cartProducts:IProduct[]=[];

  receiveEmittedProduct(obj:IProduct){
      // console.log(JSON.stringify(obj));
      let index = this.cartProducts.findIndex((prod)=>prod.id === obj.id);
     
      if(index==-1){
        this.cartProducts=[...this.cartProducts,obj];
      }else{
        this.cartProducts[index].qty = obj.qty;
      }
      
      //products with quantity=0 are removed
      this.cartProducts = this.cartProducts.filter((prod)=>prod.qty !==0)

  }
  
}