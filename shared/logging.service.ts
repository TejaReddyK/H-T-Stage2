import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})

export class LoggingService{
    logProducts(products: import("../src/app/product/product-list/product").IProduct[]) {
      throw new Error('Method not implemented.');
    }
    log():string{
        return "logging service called!";
    }
}