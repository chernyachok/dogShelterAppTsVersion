import React from 'react';

interface IImgProps{
  src: string;
  title: string;
}

const Img = (props: IImgProps) => {
  return(
    <div className="collection-item">
      <img src={props.src} heigth="225" width="225"/>
      <h6>{props.title}</h6>
    </div>
  )
}

export default Img;
