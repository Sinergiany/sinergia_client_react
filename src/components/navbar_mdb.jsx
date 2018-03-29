import React from 'react';
import sinergialogo from '../sinergia_logo.png';
import {
  Navbar, NavbarBrand, NavbarNav, NavbarToggler,
  Collapse, NavItem, Dropdown, DropdownToggle,
  DropdownMenu, DropdownItem
} from 'mdbreact';
import { Link } from 'react-router-dom'
import './navbar_mdb.css';





export default class Navbarmdb extends React.Component{

  constructor(props) {
    super(props);
    this.state ={
      collapse: false,
      isWideEnough: false
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick(){
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    return (

<header>

  <Navbar color="indigo" dark expand="md" fixed="top" scrolling>

    {!this.state.isWideEnough && <NavbarToggler onClick ={this.onClick} />}
    <Collapse isOpen={this.state.collapse} navbar>
      <NavbarNav className="mr-auto" onClick={this.onClick}>
      
          <Link className="nav-link" to="/">HOME</Link>
      
      
          <Link className="nav-link" to="/parentcenter">PARENT CENTER</Link>
      
      
          <Link className="nav-link" to="/about">ABOUT</Link>
      
      
          <Link className="nav-link" to="/services">SERVICES</Link>
      
      
          <Link className="nav-link" to="/resources">RESOURCES</Link>
      
      
          <Link className="nav-link" to="/media">MEDIA</Link>
      
      
          <Link className="nav-link" to="/getinvolved">GET INVOLVED</Link>
      
      </NavbarNav>
      <NavbarNav className="ml-auto">
      
          <Link className="nav-link" to="https://facebook.com/">dasdasd</Link>
      
      
          <Link className="nav-link" to="https://twitter.com/">csdsdas</Link>
      
      
          <Link className="nav-link" to="https://instagram.com/">dasdas</Link>
      
      </NavbarNav>
    </Collapse>
  </Navbar>



</header>


    )
  }
}
