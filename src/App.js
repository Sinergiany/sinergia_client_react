import React, { Component } from 'react';
import './App.css';

import Topnav from './components/Topnav';
import Slideoutmenu from './components/Slideoutmenu';




class App extends Component {

  render() {
    return (
        <div>

        		<Slideoutmenu />
			    <div id="panel">
			    
			      <header>
			        
			       <Topnav />

			        {this.props.children} 
			      </header>

			      <div id="carousel" data-slideout-ignore>
    				<h2>Carousel</h2>
   
  					</div>

			    </div>
      
        </div>         

    );
  }
}

export default App;
