import React from "react";
import FA from "react-fontawesome";
const Footer = props => (
  <React.Fragment>
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
              <a href="https://facebook.com/codingblackfemales" target="_blank">
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
  </React.Fragment>
);

export default Footer;
