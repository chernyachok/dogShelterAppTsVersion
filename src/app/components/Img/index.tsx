import React from 'react';
import { Link } from 'react-router-dom';

const Img = props => {
  return(
    <div className="collection-item">
      <img  src={props.src} heigth="225" width="225"/>
      <h6>{props.title}</h6>
      <Link to={"/breed/"+props.breedId}><button className="btn btn-gray">View Info</button></Link>
      <button className="btn btn-gray" onClick={() => props.handleRemoveBreed(props.breedId)}>Remove breed</button>
    </div>
  )
}

export default Img;
