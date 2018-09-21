import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from "react-bootstrap"
import { Link } from 'react-router-dom';


class Header extends Component {
  render() {
    return (
      <Navbar default fixedTop>
        <Navbar.Header>
          {/* <Navbar.Brand>
            <Link to="/">f<span>UN</span>daciones </Link>
          </Navbar.Brand> */}
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} componentClass={Link} href="/" to="/">Mi gobierno</NavItem>
            <NavItem eventKey={1} componentClass={Link} href="/" to="/">Reglas</NavItem>
            <NavItem eventKey={1} componentClass={Link} href="/" to="/">Ayuda</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
};

export default Header;
