import React from "react";
import Cbflogowhite from "../assets/cbf_logo_white.svg";
import FA from "react-fontawesome";
import Footer from "./footer/Footer";

const home = props => (
  <React.Fragment>
    <header className="masthead">
      <div className="container">
        <div className="intro-text">
          <div className="intro-lead-in">
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
      <div className="container">
        <div className="row text-center">
          <div className="col-md-4">
            <a
              href="https://www.meetup.com/Coding-Black-Females/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="fa-stack fa-4x">
                <FA name="circle" stack="2x"></FA>
                <FA name="users" stack="1x" inverse></FA>
              </span>
            </a>
            <h4 className="service-heading">Join Us</h4>
            <p className="text-muted">
              Are you a Coding Black Female? Join us, come along to our meetups.
            </p>
          </div>
          <div class="col-md-4">
            <a href="blog.html" target="_blank" rel="noopener noreferrer">
              <span className="fa-stack fa-4x">
                <FA name="circle" stack="2x"></FA>
                <FA name="rss" stack="1x" inverse></FA>
              </span>
            </a>
            <h4 class="service-heading">Blog</h4>
            <p class="text-muted">
              Read our blog, find out more about what we're doing and the
              members of our community.
            </p>
          </div>
          <div class="col-md-4">
            <a href="contact.html">
              <span className="fa-stack fa-4x">
                <FA name="circle" stack="2x"></FA>
                <FA name="envolope" stack="1x" inverse></FA>
              </span>
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
    <Footer />
  </React.Fragment>
);

export default home;
