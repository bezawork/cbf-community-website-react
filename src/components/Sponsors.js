import React from "react";
import Footer from "./footer/Footer";
import MonzoLogosvg from "../assets/Monzo_logo_master_RGB_blue.svg";
import SamSoftwareSolutions from "../assets/sam_software_solutions.svg";
import MOOLogo from "../assets/MOO_Logo.png";
import MadeTech from "../assets/made_tech.png";
import BigPixel from "../assets/bigpixel.png";
import Dxw from "../assets/dxw.jpg";

const sponsors = props => (
  <React.Fragment>
    <section id="sponsors" class="page-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading text-uppercase">Sponsors</h2>
            <h3 class="section-subheading text-muted">
              Find out about sponsoring Coding Black Females
            </h3>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <p>
              Our sponsors support Coding Black Females by doing the following
            </p>
            <ul>
              <li>Providing food and drink for our events</li>
              <li>Providing event space</li>
              <li>Providing our members with books to aid their learning</li>
              <li>Running or hosting workshops for our members</li>
            </ul>
            <p>
              We are always looking for new companies to sponsor our events or
              provide training/resources for our members, please get in touch{" "}
              <a
                href="mailto:info@codingblackfemales.com?Subject=Get Involved"
                target="_top"
              >
                info@codingblackfemales.com
              </a>
              . Our sponsors are featured on our website, and we will always
              thank you for your support on social media.
            </p>
            <p>
              If you'd like to donate to help us provide more workshops, events
              and training opportunities, then head to our{" "}
              <a href="donate.html">Donate</a> page.
            </p>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-12">
            <h3 class="detail-subheading">Our Sponsors and Partners</h3>
            <p></p>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 sponsor-image">
            <a class="" href="https://monzo.com" target="_blank">
              <img src={MonzoLogosvg} alt="monzo" height="50px" />
            </a>
          </div>
          <div class="col-lg-4 sponsor-image">
            <a class="" href="https://moo.com" target="_blank">
              <img src={MOOLogo} alt="MOO" />
            </a>
          </div>
          <div class="col-lg-4 sponsor-image">
            <a class="" href="https://madetech.com" target="_blank">
              <img src={MadeTech} alt="MadeTech" />
            </a>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 sponsor-image">
            <a
              class=""
              href="https://www.bigpixelstudios.co.uk/"
              target="_blank"
            >
              <img src={BigPixel} alt="Big pixel" />
            </a>
          </div>
          <div class="col-lg-4 sponsor-image">
            <a class="" href="https://www.dxw.com/" target="_blank">
              <img src={Dxw} alt="DXW" />
            </a>
          </div>
          <div class="col-lg-4 sponsor-image">
            <a class="" href="https://www.samsoftware.com/" target="_blank">
              <img src={SamSoftwareSolutions} alt="samsoftware" />
            </a>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </React.Fragment>
);

export default sponsors;
