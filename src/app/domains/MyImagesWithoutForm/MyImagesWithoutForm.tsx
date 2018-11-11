import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Img from '../../components/Img';
import './index.css'
class MyImagesWithoutForm extends Component{

  componentDidMount(){
    this.props.receiveBreeds()
  }

  render(){
    const { breeds, isLoading} = this.props;
    const currentBreeds = breeds.length
          ? (breeds.map((item,index) => {
            return <Img key= {index} handleRemoveBreed={(id) => this.handleRemoveBreed(id)} breedId={item.id} src={item.src} title={`Dog  ${index}`}/>
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

 handleRemoveBreed = (breedId) => {
   this.props.removeBreed(breedId);
 }

}

export default MyImagesWithoutForm;
