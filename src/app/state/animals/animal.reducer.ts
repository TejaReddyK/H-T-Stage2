import { createReducer, on } from "@ngrx/store";
import { initialState } from "./animal.state";
import { AnimalState } from "./animal.state";
import * as AnimalAction from './animal.action'

export const animalReducer = createReducer<AnimalState>(
  initialState,
  
  on(AnimalAction.setCurrentAnimal, (state, action): AnimalState => {
    return {
      ...state,
      currentAnimalId: action.currentAnimalId
    };
  }),
  on(AnimalAction.clearCurrentAnimal, (state): AnimalState => {
    return {
      ...state,
      currentAnimalId: null
    };
  }),
  on(AnimalAction.initializeCurrentAnimal, (state): AnimalState => {
    return {
      ...state,
      currentAnimalId: 0
    };
  }),
  on(AnimalAction.loadAnimalsSuccess, (state, action): AnimalState => {
    return {
      ...state,
      animals: action.animals,
      error: ''
    };
  }),
  on(AnimalAction.loadAnimalsFailure, (state, action): AnimalState => {
    return {
      ...state,
      animals: [],
      error: action.error
    };
  }),
  on(AnimalAction.updateAnimalSuccess, (state, action): AnimalState => {
    const updatedAnimals = state.animals.map(
      item => action.animal.id === item.id ? action.animal : item);
    return {
      ...state,
      animals: updatedAnimals,
      currentAnimalId: action.animal.id,
      error: ''
    };
  }),
  on(AnimalAction.updateAnimalFailure, (state, action): AnimalState => {
    return {
      ...state,
      error: action.error
    };
  }),
  // After a create, the currentAnimal is the new animal.
  on(AnimalAction.createAnimalSuccess, (state, action): AnimalState => {
    return {
      ...state,
      animals: [...state.animals, action.animal],
      currentAnimalId: action.animal.id,
      error: ''
    };
  }),
  on(AnimalAction.createAnimalFailure, (state, action): AnimalState => {
    return {
      ...state,
      error: action.error
    };
  }),
  // After a delete, the currentAnimal is null.
  on(AnimalAction.deleteAnimalSuccess, (state, action): AnimalState => {
    return {
      ...state,
      animals: state.animals.filter(animal => animal.id !== action.animalId),
      currentAnimalId: null,
      error: ''
    };
  }),
  on(AnimalAction.deleteAnimalFailure, (state, action): AnimalState => {
    return {
      ...state,
      error: action.error
    };
  })
);