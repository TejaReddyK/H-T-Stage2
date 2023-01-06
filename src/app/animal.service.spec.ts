import { HttpEvent, HttpEventType } from "@angular/common/http";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { getTestBed, inject, TestBed } from "@angular/core/testing";

import { of } from "rxjs";
import { AnimalService } from "shared/animal.service";

import { Category, Animal } from "src/app/animal/animal-list/animal";


/*class FakeApiService {
    // Implement the methods you want to overload here
    getProducts() {
      return of({ items: [[
        {
            "id":111,
            "name":"apples",
            "category":Category.fruits,
            "price":180,
            "image":"../../assets/images/apple.jpg",
            "rating":3.5,
            "qty":0
           },
          {
            "id":112,
            "name":"tomato",
            "category":Category.vegetables,
            "price":340,
            "image":"../../assets/images/tomato.jpg",
            "rating":2,
            "qty":0
        }]
    ] }); // * mocks the return of the real method
    }
  }*/
/* describe('AnimalService',()=>{
    let service:AnimalService;

    let injector: TestBed;

  let httpMock: HttpTestingController;

let  items:any[]=[];
afterEach(() => {
  httpMock.verify();
});
  beforeEach(()=>{
     TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
        providers:[AnimalService],
     });
     service=TestBed.get(AnimalService);


     injector = getTestBed();

    httpMock = injector.get(HttpTestingController);
      items=[

      {

        id:1,
        name:"apples",
        category:Category.wild,

        briefDescription:"dog",
        image:"../../assets/images/mangoes.jpg",
        

         },
        {

          id:2,
      name:"mangoes",
      category:Category.domestic,
      briefDescription:"dog",
      
      image:"../../assets/images/mangoes.jpg",
      
      }];



  });
  it('should be created',()=>{
    expect(service).toBeTruthy();
  })
  it('should getAllAnimals',
    inject([HttpTestingController,AnimalService],
      (httpMock:HttpTestingController,service:AnimalService)=>{



      service.getAnimals().subscribe(resp=>expect(items).toEqual(resp));


      const mockReq = httpMock.expectOne(service.url);

      expect(mockReq.cancelled).toBeFalsy();
      expect(mockReq.request.responseType).toEqual('json');
      mockReq.flush(items);


    }
  ));

  //using spyOn to test getProductById
  it('should get product by id',()=>{
      let response:Animal;


     let item ={

      id:114,
      name:"mangoes",
      category:Category.wild,

      briefDescription:"dog",
      image:"../../assets/images/mangoes.jpg",
      


     };

      const fn=spyOn(service, 'getAnimalById').and.returnValue(of(item));

      service.getAnimalById(111).subscribe(res=>{response=res;expect(response).toEqual(item);});

     expect(fn).toHaveBeenCalled();

  });
 //failed the test , tried to POST item1 and expected it to be equal to item2
 //then change it back to item and  see the test passed

   it('createProduct() should post a product and    return that new product  as data',()=>{


    const item:Animal={
      id:114,
      name:"mangoes",
      category:Category.wild,

      briefDescription:"dog",
      image:"../../assets/images/mangoes.jpg",
      
    

     };


    const item2:Animal ={

      id:115,
      name:"Strawberies",
      category:Category.wild,

      briefDescription:"dog",
      image:"../../assets/images/mangoes.jpg",
     

     };

    items =[...items,item];
     service.createAnimal(item).subscribe(resp=>expect(resp).toEqual(item));
     expect(items.length).toEqual(3);

     const req = httpMock.expectOne(service.url);
     expect(req.request.method).toBe('POST');
     //here the item is the response flushed , as the response body 
     req.flush(item);

     });

     it('updateProduct () should update  a product and    return updated product as data',()=>{





      let item2 ={

        id:114,
        name:"mangoes",
        category:Category.wild,

        briefDescription:"dog",
        image:"../../assets/images/mangoes.jpg",
        

       };

       service.updateAnimal(item2).subscribe(resp=>expect(resp).toEqual(item2) )


       const req = httpMock.expectOne(`${service.url}/${item2.id}`);
       expect(req.request.method).toBe('PUT');
       req.flush({item2 });

       })








   }); */
   describe('AnimalService',()=>{

    let service:AnimalService;

    let injector: TestBed;

    let httpMock: HttpTestingController;

  let  animals:any[]=[];

  afterEach(() => {

    httpMock.verify();

  });

  beforeEach(()=>{

     TestBed.configureTestingModule({

      imports:[HttpClientTestingModule],

        providers:[AnimalService],

     });

     service=TestBed.inject(AnimalService);

     injector = getTestBed();

     httpMock = injector.inject(HttpTestingController);

     animals=[

        {

            id:1,
            name:"apples",
            category:Category.wild,
    
            briefDescription:"dog",
            image:"../../assets/images/mangoes.jpg",
            
    
             },
            {
    
              id:2,
          name:"mangoes",
          category:Category.domestic,
          briefDescription:"dog",
          
          image:"../../assets/images/mangoes.jpg",
          
          }];

  });

  it('should be created',()=>{

    expect(service).toBeTruthy();

  })

  it('should getAllAnimals',

    inject([HttpTestingController,AnimalService],

      (httpMock:HttpTestingController,service:AnimalService)=>{

        service.getAnimals().subscribe(resp=>expect(animals).toEqual(resp));

        const mockReq = httpMock.expectOne(service.url);

        expect(mockReq.cancelled).toBeFalsy();

        expect(mockReq.request.responseType).toEqual('json');

        mockReq.flush(animals);

    }

  ))

  it('should get animal by id',()=>{

    let response:Animal;

   let animal1 ={


    id:114,
    name:"mangoes",
    category:Category.wild,

    briefDescription:"dog",
    image:"../../assets/images/mangoes.jpg",
    


   };

    const fn=spyOn(service, 'getAnimalById').and.returnValue(of(animal1));

    service.getAnimalById(111).subscribe(res=>{response=res;expect(response).toEqual(animal1);});

   expect(fn).toHaveBeenCalled();

});



 it('createAnimal should post animal and return that new animal as data',()=>{

  let animal1 ={
    id:114,
    name:"mangoes",
    category:Category.wild,

    briefDescription:"dog",
    image:"../../assets/images/mangoes.jpg",
    
  

   };


  const item2:Animal ={

    id:115,
    name:"Strawberies",
    category:Category.wild,

    briefDescription:"dog",
    image:"../../assets/images/mangoes.jpg",
   

   };

  animals =[...animals,animal1];

   service.createAnimal(animal1).subscribe(resp=>expect(resp).toEqual(animal1) )

   expect(animals.length).toEqual(3);

   const req = httpMock.expectOne(service.url);

   expect(req.request.method).toBe('POST');

   req.flush(animal1);

   });



   it('updateAnimal should update animal and return updated animal list',()=>{

    let animal2 ={

        id:114,
        name:"mangoes",
        category:Category.wild,

        briefDescription:"dog",
        image:"../../assets/images/mangoes.jpg",
        

       };

     service.updateAnimal(animal2).subscribe(resp=>expect(resp).toEqual(animal2) )

     const req = httpMock.expectOne(`${service.url}/${animal2.id}`);

     expect(req.request.method).toBe('PUT');

     req.flush({animal2 });



     })

 });
