import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { ProductService } from 'shared/product.service';
import { Category, IProduct } from './product';

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
dataReceived=this.productService.getProducts();

@Output() OnProductSelection:EventEmitter<IProduct>=new EventEmitter<IProduct>();
  addProducts: any;

  constructor(private productService:ProductService,
    private router:Router){ }


  ngOnInit(): void {
    this.href=this.router.url;
    console.log(this.href);
    //sub object is initialized
       this.sub =this.productService.getProducts().subscribe(
         (response)=>{

         console.log(response);
         this.products=response;
         this.filteredProducts = this.products;

       },
       err=>{this.errorMessage=err;
        console.log(err);
       }
       );

       this.productService.selectedProductChanges$.
       subscribe(currentProduct=>{this.selectedProduct=currentProduct;
       console.log(this.selectedProduct);
       });


     }

     ngOnDestroy(): void {
       this.sub.unsubscribe();
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

  this.productService.changeSelectedProduct(this.productService.newProduct());
  console.log('back to newProduct from service ');

   this.router.navigate([this.href,'addProduct']);
}
 productSelected(product:IProduct):void{
  this.productService.changeSelectedProduct(product);
 }
  getProductById(id:number):IProduct{
    this.productService.getProductById(id).subscribe(resp=>this.prod=resp);
    return this.prod;
  }
  
}
