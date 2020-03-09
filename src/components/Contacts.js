import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faTwitter,
  faFacebook,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
const contacts = props => (
  <React.Fragment>
    <section id="contact" class="page-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">Contact Us</h2>
            <h3 className="section-subheading text-muted">Get in touch</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <p className="">
              You can get in touch by email at{" "}
              <a href="mailto:info@codingblackfemales.com?Subject=Contact Us">
                info@codingblackfemales.com
              </a>
              , or using one of the social networking sites below.
            </p>
            <div id="contact-section" className="row">
              <a href="mailto:info@codingblackfemales.com?Subject=Contact Us">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
              <a
                href="https://www.instagram.com/codingblackfemales/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://twitter.com/codingblackfems"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href="https://www.facebook.com/codingblackfemales"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a
                href="https://linkedin.com/company/codingblackfemales"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </React.Fragment>
);

export default contacts;
