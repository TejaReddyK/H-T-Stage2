import { Component , EventEmitter, OnInit, Output} from '@angular/core';
import { ProductService } from 'shared/product.service';
import { Categories, IProduct } from './product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{


  constructor(private productService:ProductService){};

  ngOnInit(): void {
    this.filteredProducts=this.products;
  }

  title: string='';
  
  category:Categories = Categories.All;
 
  filteredProducts:IProduct[]=[];

  products:IProduct[]= this.productService.getProducts();

  filterProd():void{
     this.filteredProducts = this.products.filter((p:IProduct)=>p.category === (this.category));
  }

  ratingClick(msg:string):void{
    // console.log('inside product click')
    this.title = msg;
  }

  @Output() emitProductToCart:EventEmitter<IProduct>= new EventEmitter<IProduct>();

  increaseQuantity(p:IProduct):void{
     let index = this.products.findIndex((prod)=> p.id === prod.id);
     this.products[index].quantity+=1;
     this.emitProductToCart.emit(p);
  }

  decreaseQuantity(p:IProduct):void{
    let index = this.products.findIndex((prod)=> p.id === prod.id);
   
    if(this.products[index].quantity!=0){
      this.products[index].quantity-=1;
      this.emitProductToCart.emit(p);
    }
    
  }

  //called on click of btn add to cart and emit the product to app component
  onSelect(p:IProduct){
    this.emitProductToCart.emit(p);
  }

}