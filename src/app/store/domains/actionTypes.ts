export interface IAddBreedsAction {
  readonly type: string;
  readonly payload: Promise<object>;
}
export interface IDeleteBreedAction {
  readonly type: string;
}
export interface IDeleteAllBreedsAction {
  readonly type: string;
}
export interface IReceiveInitialBreedsAction {
  readonly type: string;
  readonly payload: Promise<object>;
}
