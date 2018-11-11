import { connect } from 'react-redux';
import MyImagesWithoutForm from './MyImagesWithoutForm';
import { selectAllBreeds, selectLoadStatus } from '../../store/domains/selectors';
import { addBreed, receiveInitialBreeds, removeBreed } from '../../store/domains/actions';

const mapStateToProps = (state,ownProps) => {
  return {
    breeds: selectAllBreeds(state),
    isLoading: selectLoadStatus(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return ({
    addBreed: (url) => dispatch(addBreed(url)),
    receiveBreeds: () => dispatch(receiveInitialBreeds()),
    removeBreed: (breedId) => dispatch(removeBreed(breedId))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(MyImagesWithoutForm);
