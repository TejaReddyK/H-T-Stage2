import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AnimalService } from 'shared/animal.service';
import { Animal } from './animal';


@Component({
  selector: 'animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalsListComponent implements OnInit ,OnDestroy {
errorMessage:string='';
sub!:Subscription;
animal!:Animal;
animals:Animal[]=[];
pageTitle:string="Animal List "
filteredAnimals:Animal[]=[];
selectedAnimal!:Animal | null;
filterValue!:string;
href:string='';
dataReceived=this.animalService.getAnimals;

@Output() OnAnimalSelection:EventEmitter<Animal>=new EventEmitter<Animal>();


 

  constructor(private animalService:AnimalService,
    private router:Router){ }


  ngOnInit(): void {
    this.href=this.router.url;
    console.log(this.href);
    //sub object is initialized
       this.sub =this.animalService.getAnimals().subscribe(
         (response)=>{

         console.log(response);
         this.animals=response;
         this.filteredAnimals = this.animals;

       },
       err=>{this.errorMessage=err;
        console.log(err);
       }
       );

       this.animalService.selectedAnimalChanges$.
       subscribe(currentAnimal=>{this.selectedAnimal=currentAnimal;
       console.log(this.selectedAnimal);
       });


     }

     ngOnDestroy(): void {
       this.sub.unsubscribe();
  }



   filterData(val:string){




    this.filteredAnimals=this.animals.filter((a)=>a.category===val);
  }


  onRatingClicked(msg:string):void{
    this.pageTitle='My Angular App ' +msg;
  }

 onSelect(a:Animal){
  this.OnAnimalSelection.emit(a);
 }

newAnimal():void{
  console.log('in new animal');

  this.animalService.changeSelectedAnimal(this.animalService.newAnimal());
  console.log('back to newAnimal from service ');

   this.router.navigate([this.href,'addAnimal']);
}
 animalSelected(animal:Animal):void{
  this.animalService.changeSelectedAnimal(animal);
 }
  getAnimalById(id:number):Animal{
    this.animalService.getAnimalById(id).subscribe(resp=>this.animal=resp);
    return this.animal;
  }
}