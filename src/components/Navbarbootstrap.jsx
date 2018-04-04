import React from 'react';
import {Link} from 'react-router-dom';
import {Nav, NavItem, Navbar, NavDropdown, MenuItem, Glyphicon, Button} from 'react-bootstrap';


import {LinkContainer} from 'react-router-bootstrap';
export default class Navbarbootstrap extends React.Component{

	render(){
		return(
			<div>
				<Navbar inverse collapseOnSelect navbar>
				  <Navbar.Header>
				    <Navbar.Brand>
				    <Link to='/'>React-Bootstrap</Link>
				    </Navbar.Brand>
				    <Navbar.Toggle />
				  </Navbar.Header>
				  <Navbar.Collapse>

				    <Nav>
				      <NavItem eventKey={1} href="#">
				         <Link to='/about'>ABOUT</Link>
				      </NavItem>
				      <NavItem eventKey={2} href="#">
				         <Link to='/services'>SERVICES</Link>
				      </NavItem>

				      <NavDropdown eventKey={3} title="PARENT CENTER" id="basic-nav-dropdown">
				        <MenuItem eventKey={3.1}><Link to='/parentcenter'>WORKSHOPS</Link></MenuItem> 
				              <MenuItem divider />
				        <MenuItem eventKey={3.2}><Link to='/parentcenter'>IDEA</Link></MenuItem>
				              <MenuItem divider />
				        <MenuItem eventKey={3.3}><Link to='/parentcenter'>AUTISM INICIATIVE</Link></MenuItem>
				        	<MenuItem divider />
				        <MenuItem eventKey={3.4}><Link to='/parentcenter'>INFORMATION</Link></MenuItem>
				        	<MenuItem divider />
				        <MenuItem eventKey={3.5}><Link to='/parentcenter'>PARENT CENTER NETWORK</Link></MenuItem>
				  
				      </NavDropdown>


				      <NavDropdown eventKey={4} title="RESOURCES" id="basic-nav-dropdown">
				        <MenuItem eventKey={4.1}><Link to='/parentcenter'>MSC</Link></MenuItem> 
				              <MenuItem divider />
				        <MenuItem eventKey={4.2}><Link to='/parentcenter'>DAY SERVICES</Link></MenuItem>
				              <MenuItem divider />
				        <MenuItem eventKey={4.4}><Link to='/parentcenter'>RESIDENTIAL </Link></MenuItem>
				        	<MenuItem divider />
				        <MenuItem eventKey={4.5}><Link to='/parentcenter'>FAMILY CARE</Link></MenuItem>
				        	<MenuItem divider />
				        <MenuItem eventKey={4.5}><Link to='/parentcenter'>RESPITE</Link></MenuItem>
				        	<MenuItem divider />
				        <MenuItem eventKey={4.5}><Link to='/parentcenter'>COMMUNITY HAB</Link></MenuItem>
				        	<MenuItem divider />
				        <MenuItem eventKey={4.6}><Link to='/parentcenter'>FAMILY SUPPORT</Link></MenuItem>
				        	<MenuItem divider />
				        <MenuItem eventKey={4.6}><Link to='/parentcenter'>HOUSING HELP</Link></MenuItem>
				        	<MenuItem divider />
				        <MenuItem eventKey={4.6}><Link to='/parentcenter'>WE ARE PARENTS TOO</Link></MenuItem>
				      </NavDropdown>

				      <NavItem eventKey={2} href="#">
				         <Link to='/media'>MEDIA</Link>
				      </NavItem>

				    </Nav>


				    <Nav pullRight>
				      <NavItem eventKey={1} href="#">
				        <Link to='/blog'>BLOG </Link>
				      </NavItem>
				      <NavItem eventKey={2} href="#">
				        <Link to='/calendar'>CALENDAR </Link>
				      </NavItem>
				        <NavItem eventKey={2} href="#">
				        <Link to='/donate'>DONATE </Link>
				      </NavItem>
				       <button class="toggle-button">☰</button>
				    </Nav>


				  </Navbar.Collapse>
				</Navbar>

				{/* <LinknkContainer to="/">
				                      <Button>Home</Button>
				                    </LinknkContainer> */}

			</div>

		);
	}
}