import React from "react";
import Cbflogowhite from "../assets/cbf_logo_white.svg";
import FA from "react-fontawesome";
import styled from "styled-components";

const style = styled.div`
.fastyle{
  position:"relative",
  justifyContent:'center',
  alignItems:"center",
  width:40,
  height:40}
`;

const home = props => (
  <React.Fragment>
    <header className="masthead">
      <div class="container">
        <div class="intro-text">
          <div class="intro-lead-in">
            <img src={Cbflogowhite} alt="logowhite"></img>
          </div>
        </div>
        <p>
          Building, Supporting and Educating the community of Coding Black
          Females.
        </p>
      </div>
    </header>
    <section id="home">
      <div class="container">
        <div class="row text-center">
          <div class="col-md-4">
            <a
              href="https://www.meetup.com/Coding-Black-Females/"
              target="_blank"
            >
              <FA name="users" size="4x">
                <FA name="circle" size="2x"></FA>
              </FA>
            </a>
            <h4 class="service-heading">Join Us</h4>
            <p class="text-muted">
              Are you a Coding Black Female? Join us, come along to our meetups.
            </p>
          </div>
          <div class="col-md-4">
            <a href="blog.html" target="_blank">
              <FA name="blog" size="4x">
                <FA name="circle" size="2x"></FA>
              </FA>
            </a>
            <h4 class="service-heading">Blog</h4>
            <p class="text-muted">
              Read our blog, find out more about what we're doing and the
              members of our community.
            </p>
          </div>
          <div class="col-md-4">
            <a href="contact.html">
              <FA name="envelope" size="4x">
                <FA name="circle" size="2x"></FA>
              </FA>
            </a>
            <h4 class="service-heading">Get In Touch</h4>
            <p class="text-muted">
              Get in touch if you want to find out more or help to inspire black
              women in tech.
            </p>
          </div>
        </div>
      </div>
    </section>
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <ul class="list-inline button-section-area">
              <li class="list-inline-item">
                <a
                  href="https://www.instagram.com/codingblackfemales/"
                  target="_blank"
                >
                  <FA name="instagram" size="sm" />
                </a>
              </li>
              <li class="list-inline-item">
                <a href="https://twitter.com/codingblackfems" target="_blank">
                  <FA name="twitter" size="sm" />
                </a>
              </li>
              <li class="list-inline-item">
                <a
                  href="https://facebook.com/codingblackfemales"
                  target="_blank"
                >
                  <FA name="facebook" size="sm" />
                </a>
              </li>
              <li class="list-inline-item">
                <a
                  href="https://linkedin.com/company/codingblackfemales"
                  target="_blank"
                >
                  <FA name="linkedin" size="sm" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-md-12">
        <span class="copyright">Copyright © Coding Black Females Ltd 2019</span>
      </div>
    </footer>
  </React.Fragment>
);

export default home;
