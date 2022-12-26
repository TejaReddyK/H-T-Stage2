import { Injectable } from "@angular/core";
import { Categories, IProduct } from "src/app/product/product-list/product";

@Injectable({
    providedIn:'root'
})

export class ProductService{

    getProducts():IProduct[]{
        return [
            {
              id:1 ,
              name:'Pant',
              price: 600,
              image: '../../assets/pant.jpg',
              category: Categories.Clothing,
              rating: 4,
              quantity:0
            },
            {
              id:5,
              name:'Tshirt',
              price:200,
              image: '../../assets/tshirt.jpg',
              category: Categories.Clothing,
              rating: 3.7,
              quantity:0
            },
            {
              id:10,
              name:'Table',
              price: 1200,
              image: '../../assets/table.jpg',
              category: Categories.Furniture,
              rating: 4.5,
              quantity:0
            },
            {
              id:16,
              name:'Shampoo',
              price:100,
              image: '../../assets/dog.jpg',
              category: Categories.Animal,
              rating: 4,
              quantity:0
            }
          ]
    }
}