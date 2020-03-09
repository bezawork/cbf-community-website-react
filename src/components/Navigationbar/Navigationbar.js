import React, { Component } from "react";
import Logofornavbar from "../../assets/Logofornavbar.svg";
import { Nav, Navbar, Container, Dropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import FA from "react-fontawesome";

const Styles = styled.div`
  .navbar {
    width: 100%;
  }
`;

class Navigationbar extends Component {
  render() {
    const inMemberZone = [
      "/events",
      "/programmes",
      "/jobboard",
      "/discounts"
    ].includes(this.props.location.pathname);
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
                <Nav className="text-uppercase ml-auto">
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
                  <Dropdown as={Nav.Item}>
                    <Dropdown.Toggle
                      as={Nav.Link}
                      className={inMemberZone ? "active" : null}
                    >
                      Member zone
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <LinkContainer to="/events">
                        <Dropdown.Item>OUR EVENTS</Dropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/programmes">
                        <Dropdown.Item>OUR PROGRAMMES</Dropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/jobboard">
                        <Dropdown.Item>JOB BOARD</Dropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/discounts">
                        <Dropdown.Item>DISCOUNTS</Dropdown.Item>
                      </LinkContainer>
                    </Dropdown.Menu>
                  </Dropdown>
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

export default withRouter(props => <Navigationbar {...props} />);
