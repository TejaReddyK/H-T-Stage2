import { Component, OnInit } from '@angular/core';

import { IAnimal, AnimalService } from './animal';



@Component({

  selector: 'app-animal-list',

  templateUrl: './animal-list.component.html',

  styleUrls: ['./animal-list.component.css']

})

export class AnimalListComponent implements OnInit{

  animals:IAnimal[]=[]

  constructor(private service:AnimalService){}

  ngOnInit(): void {

    this.animals=this.service.getAnimals();

  }

  _animalAge:number=0;

  showImage:boolean=false;

  imageMargin:number=5;

  get animalAge():number{

    return  this._animalAge;

}

 imageVisibility():void{



  this.showImage= !this.showImage;

}

}
/* import { Component } from '@angular/core';



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

    imageUrl:'../../assets/cat.jpg'



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

} */