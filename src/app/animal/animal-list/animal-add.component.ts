import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AnimalService } from 'shared/animal.service';
import { GenericValidator } from 'shared/genericvalidator';
import { Animal, Category } from './animal';

@Component({
  selector: 'app-animal-add',
  templateUrl: './animal-add.component.html',
  styleUrls: ['./animal-add.component.css']
})
export class AnimalAddComponent implements OnInit ,OnDestroy {
  pageTitle='Edit Animal';
  errorMessage='';

  addAnimal!: FormGroup;
  animal!:Animal | null;
  sub!:Subscription;
  displayMessage: {[key:string]:string}={};
    private validationMessages!:{[key:string]:{[key:string]:string}};

    private genericValidator!:GenericValidator;

    constructor(private formBuilder: FormBuilder,private router: Router, private animalService:AnimalService ) {

      this.validationMessages={

      name:{
        required:'animal name is required ',
        minLength:'animal name must have 3 characters',
        maxLength:'animal name must have less than  equal to 10 chars'
      },
      category:{
        required:'Category is required'
      },
      physicalStrength:{
        required:'PhysicalStrength is required'
      },image:{
        required:'Image is required'
      },color:{
        required:'Color is required'
      },briefDescription:{
        required:'briefDescription is required'}


      };
      this.genericValidator=new GenericValidator(this.validationMessages);

   }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }


  ngOnInit() {

    this.addAnimal = this.formBuilder.group({
      id: [],
      name: ['',[ Validators.required,Validators.minLength(3),Validators.maxLength(10)]],
      color:['',[Validators.required]],
      briefDescription:['',[Validators.required]],
      image:['',[Validators.required]],
      category:[Category.wild,[Validators.required]],
      physicalStrength:[3,[Validators.required]]

    });

    //when the product is selected from the product list , it should be displayed on the form

    this.sub=this.animalService.selectedAnimalChanges$.subscribe(selAnimal=>this.displayAnimal(selAnimal));


    this.addAnimal.valueChanges.
    subscribe(()=>this.displayMessage=this.genericValidator.processMessages(this.addAnimal))
  }
  
  get id(){
    return this.addAnimal.get("id");
  }

  get name(){
    return this.addAnimal.get("name");
    }

  get image(){
    return this.addAnimal.get("image");
    }
  get category(){
      return this.addAnimal.get("category");
        }
        get briefDescription(){
          return this.addAnimal.get("briefDescription");
            }

  /* onSubmit() {
    this.productService.createProduct(this.addProduct.value)
      .subscribe( data => {console.log(data);
        this.router.navigate(['products']);
      });
  }
 */
//method which renders the selected product on the form
  displayAnimal(animalParam:Animal |null):void{

   this.animal = animalParam;
   if(this.animal){
//reset the form to its original
    this.addAnimal.reset();

    if(this.animal.id==0){
      this.pageTitle='Add Animal';
    }
    else{

      this.pageTitle=`Edit A: ${this.animal.name}`;

    }
 //update the data on the form
 this.addAnimal.patchValue({
  id:this.animal.id,
   name:this.animal.name,
   image:this.animal.image,
   briefDescription:this.animal.briefDescription,
   category:this.animal.category,


 })


   }

  }

  saveAnimal(originalAnimal:Animal):void{
   console.log(originalAnimal)
    if(this.addAnimal.valid){
      if(this.addAnimal.dirty){
        const animal={...originalAnimal,...this.addAnimal.value};

      if(animal.id==0){
        console.log(animal.id)
        this.animalService.createAnimal(animal).subscribe(
          (resp)=>{
            this.animalService.changeSelectedAnimal(resp);
            console.log('AnimalAdd save animal method '+ resp);},

          (err)=> {this.errorMessage=err;
            console.log('AnimalAdd save animal method '+err);
          }

        );

     }
     else{
      console.log(animal.id)
      this.animalService.updateAnimal(animal).subscribe(
       resp=>this.animalService.changeSelectedAnimal(resp),
       err=>this.errorMessage=err      );

     }
      }

      this.router.navigate(['animals'])
    }

  }
//validating on blur ,if user tabs out through the form fields
  blur():void{
  this.displayMessage=this.genericValidator.processMessages(this.addAnimal);

  }

  deleteAnimal(animal:Animal):void{
    if(animal && animal.id){

      if(confirm(`Are you sure you want to delete ${animal.name} details`)){

        this.animalService.deleteAnimal(animal.id).subscribe(
          resp=>this.animalService.changeSelectedAnimal(null),
          err=>this.errorMessage=err
        );
      }
      else{
        //no need to delete the product
        this.animalService.changeSelectedAnimal(null)
      }
    }

  }
}