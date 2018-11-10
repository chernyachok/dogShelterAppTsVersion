import React, {Component} from 'react';
import ContactForm from '../ContactForm';
import MyImagesWithoutForm from '../../domains/MyImagesWithoutForm';

const MyImages = () => (
  <div className="main-page">
    <MyImagesWithoutForm/>
    <ContactForm/>
  </div>
)

export default MyImages;
