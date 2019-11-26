import React, { Component } from "react";
import Logofornavbar from "../../assets/Logofornavbar.svg";
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
//import styled from "styled-components";

class Navigationbar extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">
          <img src={Logofornavbar} alt="Logofornavbar" width="100" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to="/about">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/blog">
              <Nav.Link>Blog</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/testimonials">
              <Nav.Link>Testimonials</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/workshops">
              <Nav.Link>Workshops</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/events">
              <Nav.Link>Events</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/sponsors">
              <Nav.Link>Sponsors</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Donate">
              <Nav.Link>Donate</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contacts">
              <Nav.Link>Contacts</Nav.Link>
            </LinkContainer>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigationbar;
