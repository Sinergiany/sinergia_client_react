import React from 'react';
import sinergialogo from '../sinergia_logo.png';
import './sidebar.css'


import {Link} from 'react-router-dom';
import {Nav, NavItem, Navbar, NavDropdown, MenuItem, Glyphicon} from 'react-bootstrap';
import styles from'./SideBarMenu.css';

import {LinkContainer} from 'react-router-bootstrap';


const $ = window.jQuery
export default class Sidebar extends React.Component{

	componentDidMount() {
	   $(document).ready(function () {
                 $('#sidebarCollapse').on('click', function () {
                     $('#sidebar').toggleClass('active');
                     $(this).toggleClass('active');
                 });
        });
  	}

	render(){
		return(
			<nav id="sidebar">
                <div className="sidebar-header">
                    <Link to='/'>   <img  src={sinergialogo} id="logo" alt="fireSpot"/> </Link>
                </div>

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


















				
