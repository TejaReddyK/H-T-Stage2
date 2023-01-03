import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Injectable } from "@angular/core";

import { catchError, Observable, tap , BehaviorSubject, throwError, map } from "rxjs";

import { Animal, Category } from "src/app/animal/animal-list/animal";



@Injectable({

    providedIn:'root'

})

export class AnimalService{

   foundIndex:number=0;

   //angular DI will resolve the dependency of ProductService class on HttpClient

    //A -- B --C

    //ProductListComponent it has a dependency mentioned in the constructors

    //P roductService --constructor -- it says ProductService has  a dependency of type HttpClient



    ///api/products --will be resolved from in-memory web api -- /api/products

 private url="api/animal";

 animals:Animal[]=[];



 //why are we using BehaviorSubject

 //BehaviorSubject is a subtype of Observable

 //BehaviorSubject --it will emit only the last value of the source observable

 //BehaviorSubject will ensure that every consumer get recent most value

 //selection --selected object from the list of values

 private selectedAnimalSource= new BehaviorSubject<Animal | null >(null);



//conventionally you can put $ to the var if it is a Observable

selectedAnimalChanges$=this.selectedAnimalSource.asObservable();



//why are we passing http in the constructor as an argument

//what will angular do here

//angular will inject the httpclient dependency in productservice

//productservice needs to send http requests -- get post put delete

  constructor(private http:HttpClient){

    //we a re not writing any code



  }



  //retrieving all the products from api

  //method name is getProducts( ) --no args

  //what it is returning  ,what is the return type

  //return type is mentioned after the method name and a colon

  //return type  is Observable<IProduct[]>



  getAnimals():Observable<Animal[]>{

    //what is the logic

    //to get array of IProduct from db

    //get method is a generic method IProduct[]

    //arguments u are passing this.url api/products --- api

    //pipe -- operator in rxjs  where you ca

    return this.http.get<Animal[]>(this.url).pipe(



        tap(data=>{console.log(data);

          //we are assigning data to this.products

          this.animals=data;

    }),

        catchError(this.errorHandler)

    );



  }





changeSelectedAnimal(selectedAnimal:Animal | null):void{



  this.selectedAnimalSource.next(selectedAnimal);



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



  newAnimal():Animal{

  //logic should focus on sending back a IProduct

    return {



         id:0,

        name:'',

        briefDescription:'',

        image:'',

        

        category:Category.wild



    };



  }




  //what ever is in the request body, that is the object of IProduct

  //http post request  with the request body and request headers -content type application/json

  //url is the collection of events ==  /api/events



  //what is the method name --createProduct

  //args -- product of type IProduct

  //return Observable<IProduct>



  createAnimal(animal:Animal):Observable<Animal>{
    console.log(animal)
    const headers= new HttpHeaders({'Content-Type':'application/json'});

      const newAnimal={...animal,id:null};
      console.log(newAnimal)

    console.log(`in create method  ${this.url}`)

      return     this.http.post<Animal>(this.url,newAnimal,{headers})

      .pipe(

        tap(data=>{



         console.log('in create new animal'+ JSON.stringify(data));

         //pushing the new data new Product to the products array

         this.animals.push(data);



        },

        catchError(this.errorHandler)

        )

      )

  }

  //delete  api/events --- delete mapping api/events/1



  deleteAnimal(id:number):Observable<{}>{

    const headers= new HttpHeaders({'Content-Type':'application/json'});



    //@DeleteMapping deleteAll delete url/id  /api/products/111

    const url= `${this.url}/${id}`;



    return this.http.delete<Animal>(url,{headers})

    .pipe(

      tap(data=>{

        console.log('deleted animal'+id);

       const foundIndex = this.animals.findIndex(item=>item.id===id);

       //if product id is not found means index returned will be -1

       if(foundIndex > -1)

       this.animals.splice(foundIndex,1);




      },

      catchError(this.errorHandler))




    );







  }






  //update a product

  // means two steps -- one when the user selects a particular data from the list and clicks on edit button

  //you can render a new component ProductEditComponent --form with all the required fields

  // name price qty

  //ngOnInit -- it should get the values of the selectedProduct  from the ProductListComponent

  //in that form , pre fill the data from the db with the selected product

  //user will modify

  //user will submit  ,this new product data will be used in http put with the id

   getAnimalById(id:number):Observable<Animal>{

    return this.getAnimals().pipe(

      tap(()=>{console.log('fetch animal'+id);

       this.foundIndex =this.animals.findIndex(item=>item.id ==id);

      if(this.foundIndex > -1){

        this.animals[this.foundIndex];

          }

      }),

      map(()=>this.animals[this.foundIndex]),

      catchError(this.errorHandler)

      );







   }

   updateAnimal(animal:Animal):Observable<Animal>{

    const headers= new HttpHeaders({'Content-Type':'application/json'});



    //put http method

    const url= `${this.url}/${animal.id}`;



    //logic to call http put method to update the animal on the given url

    return this.http.put<Animal>(url,animal, {headers}).pipe(



    tap(()=>{console.log('update animal'+animal.id);

    const foundIndex =this.animals.findIndex(item=>item.id === animal.id);

    if(foundIndex > -1){

      this.animals[foundIndex]=animal;

        }

    }),

    map(()=>animal),

    catchError(this.errorHandler)

    );








   }







}