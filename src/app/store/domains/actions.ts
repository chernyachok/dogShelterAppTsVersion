import ApiClient from '../../services/ApiClient';

export const addBreed = (url) => {
  return {
    type: 'ADD_BREED',
    payload: ApiClient.get(url)
  }
}

export const receiveInitialBreeds = () => {
    return {
      type: 'RECEIVE_INITIAL_BREEDS',
      payload: ApiClient.get('https://dog.ceo/api/breeds/image/random/3')
    }
}
export const removeBreed = (breedId) => {
  return {
    type: 'REMOVE_BREED',
    payload: breedId
  }
}
