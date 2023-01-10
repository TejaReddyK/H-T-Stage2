import { createFeatureSelector, createSelector, createReducer, on } from '@ngrx/store';
import { Category } from 'src/app/animal/animal-list/animal';



import * as AppState from '../app.state';
import { initialState } from './animal.state';
import { AnimalState } from './animal.state';

// Selector functions
const getAnimalFeatureState = createFeatureSelector<AnimalState>('animals');
export const getCurrentAnimalId = createSelector(
  getAnimalFeatureState,
  state => state.currentAnimalId
);

export const getCurrentAnimal = createSelector(
  getAnimalFeatureState,
  getCurrentAnimalId,
  (state, currentAnimalId) => {

    if (currentAnimalId === 0) {
      return {
        id:0,
        name:'',
        category:Category.wild,
        physicalStrength:3,
        image:'',
        color:'',
        briefDescription:''
        
      };
    } else {
      return currentAnimalId ? state.animals.find(p => p.id === currentAnimalId) : null;
    }
  }
);

export const getAnimals = createSelector(
  getAnimalFeatureState,
  state => state.animals
);

export const getError = createSelector(
  getAnimalFeatureState,
  state => state.error
);