import { Animal } from 'src/app/animal/animal-list/animal';
import * as AppState from '../app.state';
// Extends the app state to include the animal feature.
// This is required because animals are lazy loaded.
// So the reference to AnimalState cannot be added to app.state.ts directly.


export interface State extends AppState.State {
  animals: AnimalState;
}
export interface AnimalState{
  currentAnimalId:number | null;
  animals:Animal[];
  error:string;
}

export const initialState:AnimalState={
  currentAnimalId:null,
  animals:[],
  error:''
}