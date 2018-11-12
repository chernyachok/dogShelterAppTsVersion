import React from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar';
import { searchBreed } from '../../store/domains/actions';

const mapDispatchToProps = (dispatch) => {
	return {
		searchBreed: (breedId) => dispatch(searchBreed(breedId))
	}
}

export default connect(null, mapDispatchToProps)(Navbar)
