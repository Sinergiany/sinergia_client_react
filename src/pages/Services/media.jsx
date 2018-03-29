import React from 'react';

import BackgroundSlideshow from 'react-background-slideshow'

import image1 from '../img/01.jpg'
import image2 from '../img/02.jpg'
import image3 from '../img/03.jpg'

export default class Media extends React.Component{

  render(){
    return(
      <div className='bgSlideShow'>
         <BackgroundSlideshow images={[ image1, image2, image3 ]} />
       </div>
    );
  }
}
