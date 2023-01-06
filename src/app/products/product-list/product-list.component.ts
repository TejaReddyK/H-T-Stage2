import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';


import { Observable, Subscription } from 'rxjs';

import { Category, IProduct } from './product';
import * as ProductActions from 'src/app/state/products/product.actions'
import { Location } from '@angular/common';
import { State } from 'src/app/state/app.state';
import { ProductService } from 'shared/product.service';
import { getCurrentProduct, getError, getProducts } from 'src/app/state/products/product.selector';
@Component({
  selector: 'products-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductsListComponent implements OnInit ,OnDestroy {
errorMessage:string='';
sub!:Subscription;
prod!:IProduct;
products:IProduct[]=[];
pageTitle:string="Product List "
filteredProducts:IProduct[]=[];
selectedProduct!:IProduct | null;
filterValue!:string;
href:string='';

//******************** declared below are observables for which we will use async pipe in template , no sub/unsub*/
products$!:Observable<IProduct[]>;
selectedProduct$!:Observable<any>;
errorMessage$!: Observable<string>;

//*************** */
dataReceived=this.productService.getProducts();
obsProducts$!:Observable<IProduct[]>;
@Output() OnProductSelection:EventEmitter<IProduct>=new EventEmitter<IProduct>();

  constructor(private productService:ProductService,
    private router:Router,private store:Store<State>,private location:Location){ }


  ngOnInit(): void {
    this.href=this.router.url;
    // console.log(this.href);
    // //sub object is initialized
    //    this.obsProducts$=this.productService.getProducts();
    //    /*.subscribe(
    //      (response)=>{

    //      console.log(response);
    //      this.products=response;
    //      this.filteredProducts = this.products;

    //    },
    //    err=>{this.errorMessage=err;
    //     console.log(err);
    //    }
    //    );*/

      //  console.log(this.selectedProduct);
      //  this.productService.selectedProductChanges$.
      //  subscribe(currentProduct=>{this.selectedProduct=currentProduct;
      // });
   // Do NOT subscribe here because it uses an async pipe
    // This gets the initial values until the load is complete.
    this.products$ = this.store.select(getProducts);
    this.products$.subscribe(resp=>this.filteredProducts=resp);
    // Do NOT subscribe here because it uses an async pipe
    this.errorMessage$ = this.store.select(getError);

    this.store.dispatch(ProductActions.loadProducts());

    // Do NOT subscribe here because it uses an async pipe
    this.selectedProduct$ = this.store.select(getCurrentProduct);

     }

     ngOnDestroy(): void {
       //this.sub.unsubscribe();
  }



   filterData(val:string){




    this.filteredProducts=this.products.filter((p)=>p.category===val);
  }


  onRatingClicked(msg:string):void{
    this.pageTitle='My Angular App ' +msg;
  }

 onSelect(p:IProduct){
  this.OnProductSelection.emit(p);
 }

newProduct():void{
   console.log('in new product');

  // this.productService.changeSelectedProduct(this.productService.newProduct());
  // console.log('back to newProduct from service ');
  this.store.dispatch(ProductActions.initializeCurrentProduct());
   this.router.navigate([this.href,'addProduct']);
}
 productSelected(product:IProduct):void{
  //this.productService.changeSelectedProduct(product);
this.store.dispatch(ProductActions.setCurrentProduct({currentProductId:product.id}));
}
  getProductById(id:number):IProduct{
    this.productService.getProductById(id).subscribe(resp=>this.prod=resp);
    return this.prod;
  }
}