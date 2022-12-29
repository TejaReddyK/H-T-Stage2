import { Component , EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { LoggingService } from 'shared/logging.service';
import { ProductService } from 'shared/product.service';
import { Categories, IProduct } from './product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy{

  constructor(private productService:ProductService, private logService:LoggingService){}
  
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  };

  displayProd(){
      this.logService.logProducts(this.products);
  }

  sub!:Subscription;
  selectedProduct!:IProduct | null;

  ngOnInit(): void {
    // this.filteredProducts=this.products;
    // this.productService.getProducts() returns observable<IProduct[]>
    
    this.sub = this.productService.getProducts()
    .subscribe(
      (response)=>{
        console.log(response);
        this.products = response;
        this.filteredProducts = response;
      },
      (err)=>{
          console.log(err);
      },
      ()=>{
        console.log('completed');
      }
    );
    this.productService.selectedProductChanges$
    .subscribe(currentProduct => this.selectedProduct = currentProduct);

    // console.log(this.selectedProduct); : null initially
  }

  title: string='';
  
  category:Categories = Categories.All;
 
  filteredProducts:IProduct[]=[];
  
  products:IProduct[]=
  [
     {
       "id":1 ,
       "name":"Pizza",
       "price": 200,
       "image": "../../assets/images/pizza.jpg",
       "category": Categories.Clothing,
       "rating": 4,
       "quantity":0
     },
     {
       "id":5,
       "name":"Tshirt",
       "price":1200,
       "image": "../../assets/images/tshirt.jpg",
       "category": Categories.Clothing,
       "rating": 3.7,
       "quantity":0
     },
     {
       "id":10,
       "name":"Table",
       "price": 120000,
       "image": "../../assets/images/table.jpg",
       "category": Categories.Furniture,
       "rating": 4.5,
       "quantity":0
     },
     {
       "id":16,
       "name":"Shampoo",
       "price":400,
       "image": "../../assets/images/dog2.jpg",
       "category": Categories.Animal,
       "rating": 4,
       "quantity":0
     }
   ];



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

  newProduct():void{
    this.productService.changeSelectedProduct(this.productService.newProduct());
  }
   
  //when product's category is clicked
  productSelected(product:IProduct):void{
    this.productService.changeSelectedProduct(product);
  }

  addProduct():void{
    console.log(this.productService.newProduct());
  }
  
}