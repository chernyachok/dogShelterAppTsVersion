export const selectAllBreeds = state => state.searchBreedReducer.breedToBeSearched
  ? state.breedsReducer.breeds.filter(item => item.id === state.searchBreedReducer.breedToBeSearched )
  : state.breedsReducer.breeds;
export const selectLoadStatus = state => state.breedsReducer.isLoading;
export const selectSingleBreed = (state, currentId) => state.breedsReducer.breeds.find(item => item.id === parseInt(currentId));
