import React, { Component } from 'react';
import logo from './logo.svg';
import sinergialogo from './sinergia_logo.png';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PageTransition from 'react-router-page-transition';

import Topnav from './components/Topnav';
import Slideoutmenu from './components/Slideoutmenu';

import './include/bootstrap';

import Slideout from 'slideout';
const $ = window.jQuery



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
