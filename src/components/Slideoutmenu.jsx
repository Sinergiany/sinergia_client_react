import React from 'react';
import sinergialogo from '../sinergia_logo.png';

import './Slideoutmenu.css';
import {Link} from 'react-router-dom';

import Slideout from 'slideout';



export default class Slideoutmenu extends React.Component{

	componentDidMount() {
		//Slideout menu
		var slideout = new Slideout({
	        'panel': document.getElementById('panel'),
	        'menu': document.getElementById('menu'),
	        'padding': 256,
	        'tolerance': 70
	      });

	      // Toggle button
	      document.querySelector('.toggle-button').addEventListener('click', function() {
	        slideout.toggle();
	      });
  	}

  render(){
    return(
      	
    	<nav id="menu">
    	 <Link to='/'><img  src={sinergialogo} id="logo" alt="sinergiaLogo"/></Link>
    		 <ul>

    		 	  <li> <Link to='/'>HOME</Link> </li>
    		 	  <li> <Link to='/about'>ABOUT</Link> </li>
    		 	  <li> <Link to='/about'>ABOUT</Link> </li>
    		 	  <li> <Link to='/about'>ABOUT</Link> </li>
    		 	  <li> <Link to='/about'>ABOUT</Link> </li>
    		 	  <li> <Link to='/about'>ABOUT</Link> </li>
    		 	  <li> <Link to='/about'>ABOUT</Link> </li>
    		 	  <li> <Link to='/about'>ABOUT</Link> </li>
    		 	  <li> <Link to='/about'>ABOUT</Link> </li>
    		 	  <li> <Link to='/about'>ABOUT</Link> </li>
    		 	  <li> <Link to='/about'>ABOUT</Link> </li>
    		 	  <li> <Link to='/about'>ABOUT</Link> </li>
    		 	  <li> <Link to='/about'>ABOUT</Link> </li>
    		 	  <li> <Link to='/about'>ABOUT</Link> </li>
    		 	  <li> <Link to='/about'>ABOUT</Link> </li>
    		 	  <li> <Link to='/about'>ABOUT</Link> </li>
    		 </ul>
        </nav>



		


    );
  }
}
