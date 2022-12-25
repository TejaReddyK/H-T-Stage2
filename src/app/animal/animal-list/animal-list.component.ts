import { Component } from '@angular/core';



@Component({

  selector: 'app-animal-list',

  templateUrl: './animal-list.component.html',

  styleUrls: ['./animal-list.component.css']

})

export class AnimalListComponent{



  animals:any[]=[{



    id:101,

    name:'cat',

    description:'meow mwow',

    age:2,

    imageUrl:'../../assets/cat.jpeg'



  },{

    id:102,

    name:'dog',

    description:'baww baww',

    age:4,

    imageUrl:'../../assets/dog.jpg'

  },{

    id:103,

    name:'tiger',

    description:'i am tiger',

    age:7,

    imageUrl:'../../assets/tiger.jpg'

  }]

}