import { Injectable } from '@angular/core';

import { mergeMap, map, catchError, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';


/* NgRx */
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as AnimalAction from './animal.action';
import { AnimalService } from 'shared/animal.service';

@Injectable()
export class AnimalEffects {

  constructor(private actions$: Actions, private animalService: AnimalService) { }

  loadAnimals$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(AnimalAction.loadAnimals),
        mergeMap(() => this.animalService.getAnimals()
          .pipe(
            map(animals => AnimalAction.loadAnimalsSuccess({ animals })),
            catchError(error => of(AnimalAction.loadAnimalsFailure({ error })))
          )
        )
      );
  });

  updateAnimal$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(AnimalAction.updateAnimal),
        concatMap(action =>
          this.animalService.updateAnimal(action.animal)
            .pipe(
              map(animal => AnimalAction.updateAnimalSuccess({ animal })),
              catchError(error => of(AnimalAction.updateAnimalFailure({ error })))
            )
        )
      );
  });

  createAnimal$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(AnimalAction.createAnimal),
        concatMap(action =>
          this.animalService.createAnimal(action.animal)
            .pipe(
              map(animal => AnimalAction.createAnimalSuccess({ animal })),
              catchError(error => of(AnimalAction.createAnimalFailure({ error })))
            )
        )
      );
  });

  deleteAnimal$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(AnimalAction.deleteAnimal),
        mergeMap(action =>
          this.animalService.deleteAnimal(action.animalId).pipe(
            map(() => AnimalAction.deleteAnimalSuccess({ animalId: action.animalId })),
            catchError(error => of(AnimalAction.deleteAnimalFailure({ error })))
          )
        )
      );
  });
}