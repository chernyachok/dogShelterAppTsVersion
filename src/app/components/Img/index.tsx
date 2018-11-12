import * as React from 'react';
import { Link } from 'react-router-dom';

interface IImgProps {
  src: string;
  breedId: number;
  title: string;
  handleRemoveBreed: (breedId: number) => void;
}

const Img: React.SFC<IImgProps> = props => {
  return(
    <div className="collection-item">
      <img  src={props.src} height="225" width="225" />
      <h6>{props.title}</h6>
      <Link to={"/breed/"+props.breedId}><button className="btn btn-gray">View Info</button></Link>
      <button className="btn btn-gray" onClick={() => props.handleRemoveBreed(props.breedId)}>
        Remove breed
      </button>
    </div>
  )
}

export default Img;
