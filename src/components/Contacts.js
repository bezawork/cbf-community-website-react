import React from "react";
import FA from "react-fontawesome";
const contacts = props => (
  <React.Fragment>
    <section id="contact" class="page-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading text-uppercase">Contact Us</h2>
            <h3 class="section-subheading text-muted">Get in touch</h3>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <p class="">
              You can get in touch by email at{" "}
              <a href="mailto:info@codingblackfemales.com?Subject=Contact Us">
                info@codingblackfemales.com
              </a>
              , or using one of the social networking sites below.
            </p>
            <div id="contact-section" class="row">
              <a href="mailto:info@codingblackfemales.com?Subject=Contact Us">
                <FA name="envelope" />
              </a>
              <a
                href="https://www.instagram.com/codingblackfemales/"
                target="_blank"
              >
                <FA name="instagram" />
              </a>
              <a href="https://twitter.com/codingblackfems" target="_blank">
                <FA name="twitter" />
              </a>
              <a
                href="https://www.facebook.com/codingblackfemales"
                target="_blank"
              >
                <FA name="facebook" />
              </a>
              <a
                href="https://linkedin.com/company/codingblackfemales"
                target="_blank"
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
