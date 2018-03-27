import React from 'react';
import sinergialogo from '../sinergia_logo.png';
import {
  Navbar, NavbarBrand, NavbarNav, NavbarToggler,
  Collapse, NavItem, NavLink, Dropdown, DropdownToggle,
  DropdownMenu, DropdownItem
} from 'mdbreact';
import './Navbarmdb.css';





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
        <NavItem>
          <NavLink className="nav-link" to="/">HOME</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-link" to="/parentcenter">PARENT CENTER</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-link" to="/about">ABOUT</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-link" to="/services">SERVICES</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-link" to="/resources">RESOURCES</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-link" to="/media">MEDIA</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-link" to="/getinvolved">GET INVOLVED</NavLink>
        </NavItem>
      </NavbarNav>
      <NavbarNav className="ml-auto">
        <NavItem>
          <NavLink className="nav-link" to="https://facebook.com/">dasdasd</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-link" to="https://twitter.com/">csdsdas</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-link" to="https://instagram.com/">dasdas</NavLink>
        </NavItem>
      </NavbarNav>
    </Collapse>
  </Navbar>



</header>


    )
  }
}
