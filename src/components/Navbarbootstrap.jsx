import React from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, Button} from 'react-bootstrap';

import {LinkContainer} from 'react-router-bootstrap';
export default class Navbarbootstrap extends React.Component{

	render(){
		return(
			<div>
				<Navbar inverse collapseOnSelect>
				  <Navbar.Header>
				    <Navbar.Brand>
				    <NavLink to='/'>React-Bootstrap</NavLink>
				    </Navbar.Brand>
				    <Navbar.Toggle />
				  </Navbar.Header>
				  <Navbar.Collapse>

				    <Nav>
				      <NavItem eventKey={1} href="#">
				         <NavLink to='/about'>ABOUT</NavLink>
				      </NavItem>
				      <NavItem eventKey={2} href="#">
				         <NavLink to='/services'>SERVICES</NavLink>
				      </NavItem>

				      <NavDropdown eventKey={3} title="PARENT CENTER" id="basic-nav-dropdown">
				        <MenuItem eventKey={3.1}><NavLink to='/parentcenter'>WORKSHOPS</NavLink></MenuItem> 
				              <MenuItem divider />
				        <MenuItem eventKey={3.2}><NavLink to='/parentcenter'>IDEA</NavLink></MenuItem>
				              <MenuItem divider />
				        <MenuItem eventKey={3.3}><NavLink to='/parentcenter'>PARENT CENTER</NavLink></MenuItem>
				        	<MenuItem divider />
				        <MenuItem eventKey={3.4}><NavLink to='/parentcenter'>PARENT CENTER</NavLink></MenuItem>
				        	<MenuItem divider />
				        <MenuItem eventKey={3.5}><NavLink to='/parentcenter'>PARENT CENTER</NavLink></MenuItem>
				  
				      </NavDropdown>


				      <NavDropdown eventKey={4} title="RESOURCES" id="basic-nav-dropdown">
				        <MenuItem eventKey={4.1}><NavLink to='/parentcenter'>MSC</NavLink></MenuItem> 
				              <MenuItem divider />
				        <MenuItem eventKey={4.2}><NavLink to='/parentcenter'>DAY SERVICES</NavLink></MenuItem>
				              <MenuItem divider />
				        <MenuItem eventKey={4.4}><NavLink to='/parentcenter'>RESIDENTIAL </NavLink></MenuItem>
				        	<MenuItem divider />
				        <MenuItem eventKey={4.5}><NavLink to='/parentcenter'>FAMILY CARE</NavLink></MenuItem>
				        	<MenuItem divider />
				        <MenuItem eventKey={4.5}><NavLink to='/parentcenter'>RESPITE</NavLink></MenuItem>
				        	<MenuItem divider />
				        <MenuItem eventKey={4.5}><NavLink to='/parentcenter'>COMMUNITY HAB</NavLink></MenuItem>
				        	<MenuItem divider />
				        <MenuItem eventKey={4.6}><NavLink to='/parentcenter'>FAMILY SUPPORT</NavLink></MenuItem>
				        	<MenuItem divider />
				        <MenuItem eventKey={4.6}><NavLink to='/parentcenter'>HOUSING HELP</NavLink></MenuItem>
				        	<MenuItem divider />
				        <MenuItem eventKey={4.6}><NavLink to='/parentcenter'>WE ARE PARENTS TOO</NavLink></MenuItem>
				      </NavDropdown>

				      <NavItem eventKey={2} href="#">
				         <NavLink to='/media'>MEDIA</NavLink>
				      </NavItem>

				    </Nav>


				    <Nav pullRight>
				      <NavItem eventKey={1} href="#">
				        <NavLink to='/blog'>BLOG </NavLink>
				      </NavItem>
				      <NavItem eventKey={2} href="#">
				        <NavLink to='/blog'>CALENDAR </NavLink>
				      </NavItem>
				        <NavItem eventKey={2} href="#">
				        <NavLink to='/blog'>DONATE </NavLink>
				      </NavItem>
				    </Nav>


				  </Navbar.Collapse>
				</Navbar>

				 <LinkContainer to="/media">
                      <Button>Foo</Button>
                    </LinkContainer>

			</div>

		);
	}
}