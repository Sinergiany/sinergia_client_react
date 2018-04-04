import React from 'react';
import {Link} from 'react-router-dom';
import './Topnav.css'


export default class Topnav extends React.Component{

	render(){
		return(
		
			<div class="navbar" id="myTopnav">
			  <a class="toggle-button">☰</a>
			  <a href="#home" class="active">Home</a>
			  <a href="#news">News</a>
			  <a href="#contact">Contact</a>
			  <a href="#about">About</a>

			</div>
		);
	}
}