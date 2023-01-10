import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { AnimalAddComponent } from '../animal/animal-list/animal-add.component';
import { AnimalShellComponent } from '../animal/animal-list/animal-shell.component';
import { AnimalRoutingModule } from './animal.routing.module';
import { animalReducer } from '../state/animals/animal.reducer';
import { AnimalEffects } from '../state/animals/animal.effect';
import { AnimalsListComponent } from '../animal/animal-list/animal-list.component';




@NgModule({
  declarations: [   AnimalsListComponent,
  AnimalAddComponent,
  AnimalShellComponent, 
 
  
],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule,
    AnimalRoutingModule,
    StoreModule.forFeature('animal', animalReducer),
    EffectsModule.forFeature([AnimalEffects])]
})
export class AnimalModule { }