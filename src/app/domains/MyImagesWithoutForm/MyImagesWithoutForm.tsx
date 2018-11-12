import * as React from 'react';
import Img from '../../components/Img';
import './index.css'
import { breeds } from '../../store/domains/StoreState';

interface IMyImgsProps {
  breeds: Array<breeds>;
  isLoading: boolean;
  addBreed: (url: string) => void;
  removeBreed: (breedId: number) => void;
  receiveBreeds: () => void;
}

class MyImagesWithoutForm extends React.Component<IMyImgsProps>{

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

 handleFetch = (param: number) => {
   this.props.addBreed(`https://dog.ceo/api/breeds/image/random/${param}`);
 }

 handleRemoveBreed = (breedId: number) => {
   this.props.removeBreed(breedId);
 }

}

export default MyImagesWithoutForm;
