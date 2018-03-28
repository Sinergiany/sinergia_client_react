import React from 'react';
import sinergialogo from '../sinergia_logo.png';
import {
  Navbar, NavbarBrand, NavbarNav, NavbarToggler,
  Collapse, NavItem, NavLink, Dropdown, DropdownToggle,
  DropdownMenu, DropdownItem
} from 'mdbreact';
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
     
    </Collapse>
  </Navbar>

  <div className="view intro hm-purple-light" >
      <div className="full-bg-img flex-center">
          <div className="container text-center white-text wow fadeInUp">
              <h2>This Navbar is fixed and transparent</h2>
              <br/>
              <h5>It will always stay visible on the top, even when you scroll down</h5>
              <p>Navbar's background will switch from transparent to solid color while scrolling down</p>
              <br/>
              <p>Full page intro with background image will be always displayed in full screen mode, regardless of device </p>
          </div>
      </div>
  </div>


</header>


    );
  }
}
