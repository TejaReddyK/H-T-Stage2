
import { Injectable } from "@angular/core";

import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from "rxjs";
import { IEvent } from "src/app/events/event-details/events";
import { Category, IProduct } from "src/app/products/product-list/product";
import { Todo } from "src/app/todo/todo.model";

@Injectable({
    providedIn:'root'
})

export class InMemoryDbEventService implements InMemoryDbService {
    
    createDb(reqInfo?: RequestInfo | undefined): {} | Observable<{}> | Promise<{}> {
        
            const todos: Todo[]=[{id:'111',content:'hello'},{id:'222',content:'angular web db'}];
            
        
        let events:IEvent[] = [
           {
        "id":1,
        "name":"dog",
        "date": "23/12/2022",
        "time":"08:30 am",
        "price":1000,
        "imageUrl":"../assets/dog.jpg",
        "location":{
            "address":"123",
            "city":"Delhi",
            "country":"India"
        },
        "sessions":[
            {
                "id":10,
                "name":"AI",
                "presentor":"teja",
                "duration":"",
                "level":10,
                "voters":["leo", "snoppy", "tufffy"]
            },
            {
                "id":11,
                "name":"",
                "presentor":"satya",
                "duration":"",
                "level":11,
                "voters":["leo", "snoppy"]
            }
        ]
    },

    {
        "id":2,
        "name":"cat",
        "date": "23/12/2022",
        "time":"08:30 am",
        "price":102,
        "imageUrl":"../assets/cat.jpg",
        "location":{
            "address":"123",
            "city":"Delhi",
            "country":"India"
        },
        "sessions":[
            {
                "id":20,
                "name":"AI",
                "presentor":"satya",
                "duration":"",
                "level":10,
                "voters":["leo", "snoppy", "tufffy"]
            },
            {
                "id":21,
                "name":"",
                "presentor":"sai",
                "duration":"",
                "level":11,
                "voters":["leo", "snoppy", "tufffy"]
            }
        ]
    },

    {
        "id":3,
        "name":"tiger",
        "date": "23/12/2022",
        "time":"08:30 am",
        "price":102,
        "imageUrl":"../assets/tiger.jpg",
        "location":{
            "address":"123",
            "city":"Delhi",
            "country":"India"
        },
        "sessions":[
            {
                "id":10,
                "name":"AI",
                "presentor":"reddy",
                "duration":"",
                "level":10,
                "voters":["leo", "snoppy", "tufffy"]
            },
            {
                "id":11,
                "name":"",
                "presentor":"sai",
                "duration":"",
                "level":11,
                "voters":["leo","tufffy"]
            }
                ]
            }
        ]

        let products: IProduct[]= [
           
      {

        "id":111,
        "name":"apple",
        "category":Category.fruits,

        "price":180,
        "image":"../../assets/apple.jpg",
        "rating":3.5,
        "qty":0

       },
      {

        "id":112,
        "name":"potato",
        "category":Category.vegetables,

        "price":340,
        "image":"../../assets/potato.jpg",
        "rating":2,
        "qty":0
    }
         ]
         let animal = [
            {
              "id":1,
          
              "name":"Tiger",
          
              "briefDescription":"King of Jungle",
          
              "image":"../../assets/tiger.jpg",
          
              "category":"wild"
          
              }
          
               ,{
          
              "id":2,
          
              "name":"Dog",
          
              "briefDescription":"King of Streets",
          
              "image":"../../assets/dog.jpg",

          
              "category":"domestic"
          
            }
          
             ,{
          
              "id":3,
          
              "name":"Cat",
          
              "briefDescription":"Silent Killer",
          
              "image":"../../assets/cat.jpg",
          
          
              "category":"domestic"
            }
          ]

        return {events, products, animal, todos};
                
    }

}