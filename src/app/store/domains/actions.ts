import  ApiClient from '../../services/ApiClient';
import {
  IAddBreedsAction,
  IDeleteBreedAction,
  IDeleteAllBreedsAction,
  IReceiveInitialBreedsAction,
} from './actionTypes';

export const addBreed = (url: string): IAddBreedsAction => {
  return {
    type: 'ADD_BREED',
    payload: ApiClient.get(url)
  }
}

export const deleteBreed = (id: number): IDeleteBreedAction => {
  return {
    type: 'DELETE_BREED',
    payload: id
  }
}

export const deleteAllBreeds = (): IDeleteAllBreedsAction => {
  return {
    type: 'DELETE_ALL_BREEDS',
    payload: null
  }
}

export const receiveInitialBreeds = (): IReceiveInitialBreedsAction => {
    return {
      type: 'RECEIVE_INITIAL_BREEDS',
      payload: ApiClient.get('https://dog.ceo/api/breeds/image/random/3')
    }
}
