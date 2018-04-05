import React from 'react';
import {Link} from 'react-router-dom';
import './Topnav.css';

import './NavButton.css';




export default class Topnav extends React.Component{

	componentDidMount(){

		
	}

	render(){
		return(
		
			<nav className="navbar" id="myTopnav">
			  <div class="container toggle-button">
				  <div class="bar1"></div>
				  <div class="bar2"></div>
				  <div class="bar3"></div>
				</div>

			 <Link  className="paginas" to="/">HOME</Link>
			 <Link  className="paginas" to="/about">ABOUT</Link>
			 <Link  className="paginas" to='/services'>SERVICES</Link>
			 <Link  className="paginas" to="/parentcenter">parentcenter</Link>
			 <Link  className="paginas" to="/media">media</Link>
			 <Link  className="paginas" to="/about">ABOUT</Link>
			 <Link  className="paginas" to="/about">ABOUT</Link>

			</nav>
		);
	}
}