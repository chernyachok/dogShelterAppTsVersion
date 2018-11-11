import React, {Component} from 'react';

export default ({singleBreed}) => {
  const singleBreedComponent = singleBreed
    ? (
       <div class="row">
         <div class="col s8 m7">
           <div class="card">
             <div class="card-image">
               <img src={singleBreed.src}/>
             </div>
             <div class="card-content">
               <p>Woof-woof!</p>
             </div>

           </div>
         </div>
       </div>
    )
    : (<h4>Not found</h4>)
  return (
    <div>{singleBreedComponent}</div>
  )
}
