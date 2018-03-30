import React from 'react';
import Carouselshow from '../components/slideShow';
import './CSS/home.css';
import supporter from '../img/SignUpSupporter.png'
import sinergialogo from '../sinergia_logo.png';


export default class About extends React.Component{

  render(){
    return(
      <div class="grid-container">

          <div className='row '>

            <div className=''> 
              <h1> Providing Multicultural, Lifespan Services for People with Disabilities </h1>
              
            </div>

            <div className=''> 
              Providing Multicultural, Lifespan Services for People with Disabilities
              <img src={supporter} />
            </div>

          </div>


          <div className='row '>

            <div className=''> 
              Providing Multicultural, Lifespan Services for People with Disabilities
              
            </div>

            <div className=''> 
              Providing Multicultural, Lifespan Services for People with Disabilities
              <img src={supporter} />
            </div>

          </div>
    
       
      </div>
    );
  }
}
