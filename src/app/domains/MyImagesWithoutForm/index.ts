import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import MyImagesWithoutForm from './MyImagesWithoutForm';
import { selectAllBreeds, selectLoadStatus } from '../../store/domains/selectors';
import { addBreed, receiveInitialBreeds, removeBreed } from '../../store/domains/actions';
import StoreState from '../../store/domains/StoreState';

const mapStateToProps = (state: StoreState) => {
  return {
    breeds: selectAllBreeds(state),
    isLoading: selectLoadStatus(state)
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return ({
    addBreed: (url: string) => dispatch(addBreed(url)),
    receiveBreeds: () => dispatch(receiveInitialBreeds()),
    removeBreed: (breedId: number) => dispatch(removeBreed(breedId))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(MyImagesWithoutForm);
