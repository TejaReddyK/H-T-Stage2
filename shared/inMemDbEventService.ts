import { I18nPluralPipe } from "@angular/common";
import { Injectable } from "@angular/core";

import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from "rxjs";
import { IEvent } from "src/app/events/event-details/events";
import { Categories, IProduct } from "src/app/product/product-list/product";

@Injectable({
    providedIn:'root'
})

export class InMemoryDbEventService implements InMemoryDbService {
    
    createDb(reqInfo?: RequestInfo | undefined): {} | Observable<{}> | Promise<{}> { 
        
        let events:IEvent[] = [
            {
                "id":1,
                "name":"enva",
                "date": "23/12/2022",
                "time":"08:30 am",
                "price":102,
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
                        "presentor":"Manvi",
                        "duration":"",
                        "level":10,
                        "voters":["leo", "snoppy", "tufffy"]
                    },
                    {
                        "id":11,
                        "name":"",
                        "presentor":"Ivnam",
                        "duration":"",
                        "level":11,
                        "voters":["leo", "snoppy", "tufffy"]
                    }
                ]
            },
        
            {
                "id":2,
                "name":"Anugoonj",
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
                        "id":1,
                        "name":"AI",
                        "presentor":"Manvi",
                        "duration":"",
                        "level":10,
                        "voters":["leo", "snoppy", "tufffy"]
                    },
                    {
                        "id":1,
                        "name":"",
                        "presentor":"Ivnam",
                        "duration":"",
                        "level":11,
                        "voters":["leo", "snoppy", "tufffy"]
                    }
                ]
            },
        
            {
                "id":3,
                "name":"Asndbsnd",
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
                        "presentor":"Manvi",
                        "duration":"",
                        "level":10,
                        "voters":["leo", "snoppy", "tufffy"]
                    },
                    {
                        "id":11,
                        "name":"",
                        "presentor":"Ivnam",
                        "duration":"",
                        "level":11,
                        "voters":["leo", "snoppy", "tufffy"]
                    }
                ]
            }
        ]

        let products: IProduct[]= [
           {
             "id":1 ,
             "name":"Pant",
             "price": 200,
             "image": "../../assets/pant.jpg",
             "category": Categories.Clothing,
             "rating": 4,
             "quantity":0
           },
           {
             "id":5,
             "name":"Tshirt",
             "price":100,
             "image": "../../assets/tshirt.jpg",
             "category": Categories.Clothing,
             "rating": 3.7,
             "quantity":0
           },
           {
             "id":10,
             "name":"Table",
             "price": 1200,
             "image": "../../assets/table.jpg",
             "category": Categories.Furniture,
             "rating": 4.5,
             "quantity":0
           },
           {
             "id":16,
             "name":"animal",
             "price":400,
             "image": "../../assets/dog.jpg",
             "category": Categories.Animal,
             "rating": 4,
             "quantity":0
           }
         ]

        return {events, products};
                
    }

}