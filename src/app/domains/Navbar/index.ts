import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import Navbar from './Navbar';
import { searchBreed } from '../../store/domains/actions';

const mapDispatchToProps = (dispatch: Dispatch) => {
	return {
		searchBreed: (breedId: number) => dispatch(searchBreed(breedId))
	}
}

export default connect(null, mapDispatchToProps)(Navbar)
