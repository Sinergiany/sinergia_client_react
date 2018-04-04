import React from 'react';
import sinergialogo from '../sinergia_logo.png';


import {Link} from 'react-router-dom';

import Slideout from 'slideout';
const $ = window.jQuery


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
			      <ul className="list-unstyled components">
                    <p>Dummy Heading</p>
                    <li className="active">
                        <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false">Home</a>
                        <ul className="collapse list-unstyled" id="homeSubmenu">
                            <li><a href="#">Home 1</a></li>
                            <li><a href="#">Home 2</a></li>
                            <li><a href="#">Home 3</a></li>
                        </ul>
                    </li>
                    <li>
                         <Link to='/about'>ABOUT</Link>
                        <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false">Pages</a>
                        <ul className="collapse list-unstyled" id="pageSubmenu">
                            <Link to='/'>Home</Link>
                            <li><a href="#">Page 2</a></li>
                            <li><a href="#">Page 3</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">Portfolio</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>

                <ul className="list-unstyled CTAs">
                    <li><a href="https://bootstrapious.com/tutorial/files/sidebar.zip" className="download">Download source</a></li>
                    <li><a href="https://bootstrapious.com/p/bootstrap-sidebar" className="article">Back to article</a></li>
                </ul>			    

        </nav>



		


    );
  }
}
