import React, { Component } from "react";
import Logofornavbar from "../../assets/Logofornavbar.svg";
import { Nav, Navbar, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import styled from "styled-components";
import FA from "react-fontawesome";

const Styles = styled.div`
  .navbar {
    width: 100%;
  }
`;

class Navigationbar extends Component {
  render() {
    return (
      <Styles>
        <Nav defaultActiveKey="/">
          <Navbar fixed="top" bg="dark" variant="dark" expand="lg" id="mainNav">
            <Container>
              <Navbar.Brand href="/" id="navbarResponsive">
                <img src={Logofornavbar} alt="Logofornavbar" width="150" />
              </Navbar.Brand>
              <Navbar.Toggle
                type="button"
                aria-controls="navbarResponsive"
                data-toggle="collapse"
              >
                Menu &nbsp;
                <FA name="bars" />
              </Navbar.Toggle>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="navbar-nav text-uppercase ml-auto">
                  <Nav.Item>
                    <LinkContainer to="/about">
                      <Nav.Link>About</Nav.Link>
                    </LinkContainer>
                  </Nav.Item>
                  <Nav.Item>
                    <LinkContainer to="/blog">
                      <Nav.Link>Blog</Nav.Link>
                    </LinkContainer>
                  </Nav.Item>
                  <Nav.Item>
                    <LinkContainer to="/testimonials">
                      <Nav.Link>Testimonials</Nav.Link>
                    </LinkContainer>
                  </Nav.Item>
                  <Nav.Item>
                    <LinkContainer to="/workshops">
                      <Nav.Link>Workshops</Nav.Link>
                    </LinkContainer>
                  </Nav.Item>
                  <Nav.Item>
                    <LinkContainer to="/events">
                      <Nav.Link>Events</Nav.Link>
                    </LinkContainer>
                  </Nav.Item>
                  <Nav.Item>
                    <LinkContainer to="/sponsors">
                      <Nav.Link>Sponsors</Nav.Link>
                    </LinkContainer>
                  </Nav.Item>
                  <Nav.Item>
                    <LinkContainer to="/Donate">
                      <Nav.Link>Donate</Nav.Link>
                    </LinkContainer>
                  </Nav.Item>
                  <Nav.Item>
                    <LinkContainer to="/contacts">
                      <Nav.Link>Contacts</Nav.Link>
                    </LinkContainer>
                  </Nav.Item>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Nav>
      </Styles>
    );
  }
}

export default Navigationbar;
