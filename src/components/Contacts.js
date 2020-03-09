import React from "react";
import FA from "react-fontawesome";
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
                <FA name="envelope" />
              </a>
              <a
                href="https://www.instagram.com/codingblackfemales/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FA name="instagram" />
              </a>
              <a
                href="https://twitter.com/codingblackfems"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FA name="twitter" />
              </a>
              <a
                href="https://www.facebook.com/codingblackfemales"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FA name="facebook" />
              </a>
              <a
                href="https://linkedin.com/company/codingblackfemales"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FA name="linkedin" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </React.Fragment>
);

export default contacts;
