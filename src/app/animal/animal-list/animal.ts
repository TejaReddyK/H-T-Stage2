import { Injectable } from "@angular/core";
export enum Category{
  wild='wild' , domestic='domestic'

}

export interface Animal{

  

  id:number;

  name:string;

  briefDescription:string;

  image:string;
  
  category:Category;

  }