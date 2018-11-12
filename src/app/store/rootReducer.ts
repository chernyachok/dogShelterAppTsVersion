import { combineReducers } from 'redux';
import breedsReducer from './domains/breedsReducer';
import searchBreedReducer from './domains/searchBreedReducer';

export default combineReducers({
  breedsReducer,
  searchBreedReducer
});
