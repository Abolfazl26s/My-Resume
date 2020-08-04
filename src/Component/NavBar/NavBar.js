import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-scroll";

import "./NavBar.css";

class NavBar extends Component {
  state = {
  };
  render() {

    return (
      <Container fluid={true} className="p-0 sticky-top alert-info">
        <Navbar className="border-bottom" expand="lg">
          <Navbar.Brand>My Resume</Navbar.Brand>

          <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
          <Navbar.Collapse id="navbar-toggle">
            <Nav className="ml-auto">
              <Link
                className="nav-link btn mr-1 rounded"
                activeClass="active"
                to="Home"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                onSetActive={this.handleSetActive}
              >
                <a href="/">Home</a>
              </Link>
              <Link
                className="nav-link btn mr-1 rounded"
                activeClass="active"
                to="About"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                onSetActive={this.handleSetActive}
              >
                <a href="/">About</a>
              </Link>
              <Link
                className="nav-link btn rounded"
                activeClass="active"
                to="Skills"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                onSetActive={this.handleSetActive}
              >
                <a href="/">Skills</a>
              </Link>
              <Link
                className="nav-link btn rounded"
                activeClass="active"
                to="ChangeColor"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                onSetActive={this.handleSetActive}
              >
                <a href="/">ChangeColor</a>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    );
  }
}

export default NavBar;
