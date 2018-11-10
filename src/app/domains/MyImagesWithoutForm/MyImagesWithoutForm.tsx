import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Img from '../../components/Img';
import './index.css'

interface IAppProps{
  breeds: [object];
  isLoading: boolean
}

class MyImagesWithoutForm extends Component<IAppProps>{

  componentDidMount(){
    this.props.receiveBreeds()
  }

  render(){
    const { breeds, isLoading} = this.props;
    const currentBreeds = breeds.length
          ? (breeds.map((item,index) => {
            return <Link to={"/"+item.id}><Img key= {index} src={item.src} title={`Dog  ${index}`}/></Link>
          }))
          : (
            <div className="center">No breeds in collection.</div>
          )
    return (
      <div className="col s12 ">
      { isLoading && 'Loading...'}
        <div className="collection">
        {
          currentBreeds
        }
        </div>
        <div >
          <button className="btn btn-grey" onClick={() => this.handleFetch(3)}>See more</button>
        </div>
      </div>
    )
  };

  handleFetch = (param) => {
   this.props.addBreed(`https://dog.ceo/api/breeds/image/random/3`);
 }
}

export default MyImagesWithoutForm;
