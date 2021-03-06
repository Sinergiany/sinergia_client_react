import React from 'react';
import {Link} from 'react-router-dom';
import sinergialogo from '../sinergia_logo.png';
import './Topnav.css';




const $ = window.jQuery

export default class Topnav extends React.Component{

	componentDidMount(){
		var wrapperMenu = document.querySelector('.wrapper-button');

		wrapperMenu.addEventListener('click', function(){
		  wrapperMenu.classList.toggle('open');  
		})
				
	}

	render(){
		return(
		
		<nav className="navbar" id="myTopnav">
 			<div>
			<div className="wrapper-button toggle-button">

				<div className="line-menu half start "></div>
				<div className="line-menu"></div>
				<div className="line-menu half end"></div>
			</div>

			<div className="top-logo">
			<Link to='/'><img  src={sinergialogo} id="logo" alt="sinergiaLogo"/></Link>
			</div>

		 	<Link  className="paginas" to="/contact">contact us</Link>
		 	<Link  className="paginas" to="/Careers">Careers</Link>
		 	<Link  className="paginas" to="/getinvolved">get involved</Link>
		 	<Link  className="paginas" to="/media">media center</Link>
		 	<Link  className="paginas" to="/blog">blog / news</Link>
		 	<Link  className="paginas" to="/donate">donate</Link>
			<Link  className="paginas" to="/parentcenter">parentcenter</Link>
			<Link  className="paginas" to='/services'>services</Link>
			<Link  className="paginas" to="/about">who we are</Link>

		 	</div>


		</nav>
		);
	}
}