import React from 'react';
import Carouselshow from '../components/slideShow';
import './CSS/home.css';
import supporter from '../img/SignUpSupporter.png'


export default class About extends React.Component{

  render(){
    return(
      <div class="grid-container">

    
        <div> 
          hello
        </div>

        <div className="grid-item ">

         <img src={supporter} />

        </div>

       
         <div className="grid-item slideShow">

          <Carouselshow />

        </div>

       


        

      </div>
    );
  }
}
