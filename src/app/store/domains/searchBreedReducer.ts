const initState = {
  breedToBeSearched: 0
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
