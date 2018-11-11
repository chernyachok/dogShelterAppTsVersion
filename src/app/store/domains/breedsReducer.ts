const initState ={
  isLoading: false,
  breeds: []
}


const breedsReducer = (state = initState,action) => {
  if(action.type === 'ADD_BREED_PENDING'){
    return {//all initState object
      ...state,
      isLoading: true
    }
  }
  if(action.type === 'ADD_BREED_FULFILLED'){
    const { payload } = action
    let breeds =[];
    payload.message.forEach((dog, index) => {
      const id = Math.floor(Math.random()*1000);
      breeds.push({id, src: payload.message[index]})
    });
    breeds = state.breeds.concat(breeds)
    return {
      ...state,
      isLoading: false,
      breeds
    }
  }
  if(action.type === 'ADD_BREED_REJECTED'){
    console.log('rejected');
  }

  if(action.type === 'RECEIVE_INITIAL_BREEDS_PENDING'){
    return {
      ...state,
      isLoading: true
    }
  }
  if(action.type === 'RECEIVE_INITIAL_BREEDS_FULFILLED'){
    const breeds = [];
    action.payload.message.forEach((item, index) => breeds.push({id: Math.floor(Math.random()*1000), src: action.payload.message[index]}))
    return {
      ...state,
      isLoading: false,
      breeds
    }
  }
  if(action.type === 'RECEIVE_INITIAL_BREEDS_REJECTED'){
    console.log('rejected...');
  }
  if(action.type === 'REMOVE_BREED'){
  const breeds = state.breeds.filter(item => item.id !== action.payload)
  return {
    ...state,
    breeds
  }
}
  return state;
}

export default breedsReducer;
