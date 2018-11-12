import { connect } from 'react-redux';
import SingleBreed from './SingleBreed';
import { selectSingleBreed } from '../../store/domains/selectors';
import StoreState from '../../store/domains/StoreState';

const mapStateToProps = (state: StoreState, ownProps: {[key: string]: any}) => {
  const currentId = ownProps.match.params.breed_id;
  return {
    singleBreed: selectSingleBreed(state, currentId)
  }
}

export default connect(mapStateToProps)(SingleBreed);
