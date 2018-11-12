const initState = {
  breedToBeSearched: null
}

const searchBreedReducer = (state = initState, action) => {
  if(action.type === 'SEARCH_BREED'){
    return {
      breedToBeSearched: parseInt(action.payload)
    }
  }
  return state;
}

export default searchBreedReducer;
