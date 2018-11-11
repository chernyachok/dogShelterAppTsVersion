import React from 'react';
import { connect } from 'react-redux';
import SingleBreed from './SingleBreed';
import { selectSingleBreed } from '../../store/domains/selectors';

const mapStateToProps = (state, ownProps) => {
  const currentId = ownProps.match.params.breed_id;
  return {
    singleBreed: selectSingleBreed(state, currentId)
  }
}

export default connect(mapStateToProps)(SingleBreed);
