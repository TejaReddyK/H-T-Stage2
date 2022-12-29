import { Component, OnInit, ViewChild } from '@angular/core';

import { NgForm } from '@angular/forms';

export class country{

  id:string='';

  name:string='';



  constructor(id:string,name:string){

    this.id=id;

    this.name=name;

  }

}

export class Trustee{

  trusteeId!: number;

  name!:string;

  gender!: string;

  country!: string;

  passport!: string;  

  issuanceDate!: string;

  noOfDependents!: number;

}



@Component({

  selector: 'app-trustee',

  templateUrl: './trustee.component.html',

  styleUrls: ['./trustee.component.css']

})



export class TrusteeComponent implements OnInit{



  trustee!: Trustee;

  @ViewChild('trusteeForm',{}) trusteeForm !: NgForm;

  countries:country[]=[

    new country("1","India"),

    new country("2","Japan"),

    new country("3","China"),

    new country("4","UK")

  ];

  constructor(){}

  ngOnInit(): void {

     this.trustee={

      trusteeId:123,

      name:'Tejasatya',

      gender:'male',

      country:'1',

      passport:'12345',

      issuanceDate:'2022-12-29',

      noOfDependents:2

     

     };



     setTimeout(()=>{

      this.trusteeForm.setValue(this.trustee);

     }, 1000);

  }

   

  onSubmit(trusteeForm:any){

    console.log(trusteeForm.value);

  }

  changeCountry(){

    this.trusteeForm.controls['country'].setValue("1");

   }

}