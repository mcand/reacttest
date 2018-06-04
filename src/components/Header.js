import React, { Component } from 'react';
import './Header.css';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem, Grid } from 'react-bootstrap';
import ReactSVG from 'react-svg'
import logo from '../Company.svg';
import me from '../me.jpg'

class Header extends Component{
  render(){
    return(
      <Navbar collapseOnSelect fluid>
        <Navbar.Header>
          <Navbar.Brand>
            <ReactSVG
              path={logo}
              svgClassName="logo"
              className="wrapper-class-name"
            />
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse className="pull-right mynav">
          <Nav className="menus">
            <NavItem eventKey={1} href="/jobs">Home</NavItem>
            <NavItem eventKey={2} href="/">Documents</NavItem>
            <NavItem eventKey={2} href="/">Contacts</NavItem>
          </Nav>
          <Nav className="profile-nav">
            <span className="profile hidden-xs">
              <img className="img-circle" src={me} width="40"></img>
            </span>
            <span className="fullname">First Name <br></br> Last Name</span>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;