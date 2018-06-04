import React, { Component } from 'react';
import './Footer.css';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem, Grid } from 'react-bootstrap';

class Footer extends Component{
  render(){
    return(
      <footer className="container-fluid">
        <ul className="menu">
          <li>© Copyrights</li>
          <li>All rights reserved</li>
          <br className="hidden-md hidden-lg"/>
          <li className="newline"><a href="#">Imprint</a></li>
          <li><a href="#">Terms of use</a></li>
          <li><a href="#">Privacy policy</a></li>
        </ul>
      </footer>
    );
  }
}

export default Footer;