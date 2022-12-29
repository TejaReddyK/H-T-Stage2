import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, catchError, Observable, tap, throwError } from "rxjs";
import { Categories, IProduct } from "src/app/product/product-list/product";

@Injectable({
    providedIn:'root'
})

export class ProductService{

  constructor(private http: HttpClient){}

   //why are we using BehaviorSubject
 //BehaviorSubject is a subtype of Observable
 //BehaviorSubject --it will emit only the last value of the source observable
 //BehaviorSubject will ensure that every consumer get recent most value
 //selection --selected object from the list of values
     private selectedProductSource = new BehaviorSubject<IProduct | null >(null);

 //conventionally you can put $ to the var if it is a Observable
    selectedProductChanges$ = this.selectedProductSource.asObservable();

    private url='api/products/';
    products:IProduct[]=[];

    // getProducts() : Observable<IProduct[]>{
    //     return this.http.get<IProduct[]>('api/products/');
    // }

    getProducts():Observable<IProduct[]>{
        //what is the logic
        //to get array of IProduct from db
        //get method is a generic method IProduct[]
        //arguments u are passing this.url api/products --- api
        //pipe -- operator in rxjs  where you ca
        return this.http.get<IProduct[]>(this.url).pipe(
    
            tap(data=>{console.log(data);
              //we are assigning data to this.products
              this.products=data;
        }),
            catchError(this.errorHandler)
        );
    
      }

      
    changeSelectedProduct(selectedProduct:IProduct | null):void{
        this.selectedProductSource.next(selectedProduct);
        console.log(selectedProduct);
        console.log(this.selectedProductChanges$);
        console.log(this.selectedProductSource);
    }
  
    //errorhandler which returns the Observable with errorMessage
    errorHandler=(err:any)=>{
  
     let errorMessage:string;
     //a client side error or network error then ErrorEvent object will be thrown
  
     if(err.error instanceof ErrorEvent)
       {
         errorMessage = `An error has occured ${err.error.message}`
       }
       else{
        errorMessage =  `Backend error code ${err.status} ${err.body.error}`;
       }
       console.log(err);
       return throwError(errorMessage);
    }
  
  
    // a method newProduct which acts like a constructor of creating a new Product
    //what is name of the method -- newProduct
    //how many args --zero args
    //return type IProduct
  
    newProduct():IProduct{
    //logic should focus on sending back a IProduct
      return {
          id:0,
          name:'',
          category: Categories.Clothing,
          price:0,
          image:'',
          rating:0,
          quantity:0
      };
  
    }
  
    

  //what ever is in the request body, that is the object of IProduct
  //http post request  with the request body and request headers -content type application/json
  //url is the collection of events ==  /api/events

  //what is the method name --createProduct
  //args -- product of type IProduct
  //return Observable<IProduct>

  createProduct(product:IProduct):Observable<IProduct>{
    //headers variable to set request headers
   const headers= new HttpHeaders({'Content-Type':'application/json'});

       //newProduct spread across product
     const newProduct={...product,id:null};


     //return logic starts here
     //http .post method
     //generics method -- IProduct
     //args --3 url , newProduct ,headers
     //this.url -- declared in the class outside the functions
     return this.http.post<IProduct>(this.url,newProduct,{headers})
        .pipe(
            tap(data=>{
                console.log('in create new product'+ JSON.stringify(data));
                //pushing the new data new Product to the products array
                this.products.push(data);

           },
                catchError(this.errorHandler)
            )
        )
    }

      //delete  api/events --- delete mapping api/events/1

  deleteProduct(id:number):Observable<{}>{
        const headers= new HttpHeaders({'Content-Type':'application/json'});

        //@DeleteMapping deleteAll delete url/id  /api/products/111
        const url= `${this.url}/${id}`;

        return this.http.delete<IProduct>(url,{headers})
        .pipe(
        tap(data=>{
            console.log('deleted prd'+id);
            const foundIndex = this.products.findIndex(item=>item.id===id);
            //if product id is not found means index returned will be -1
            if(foundIndex > -1)
            this.products.splice(foundIndex,1);
            },
            catchError(this.errorHandler))
        );
    }
}