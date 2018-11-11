export const selectAllBreeds = state => state.breedsReducer.breeds;
export const selectLoadStatus = state => state.breedsReducer.isLoading;
export const selectSingleBreed = (state, currentId) => state.breedsReducer.breeds.find(item => item.id === parseInt(currentId));
