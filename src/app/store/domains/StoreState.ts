export interface breeds {
  id: number;
  src: string;
}

export interface allBreedsState {
  breeds: Array<breeds>;
  isLoading: boolean;
}

export interface searchBreedsState {
  breedToBeSearched: number;
}

export default interface StoreState {
  readonly breedsReducer: allBreedsState;
  readonly searchBreedReducer: searchBreedsState;
}
