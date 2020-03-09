import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faFacebook,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
const Footer = props => (
  <React.Fragment>
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <ul class="list-inline button-section-area">
              <li class="list-inline-item">
                <a
                  href="https://www.instagram.com/codingblackfemales/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faInstagram} size="sm" />
                </a>
              </li>
              <li class="list-inline-item">
                <a
                  href="https://twitter.com/codingblackfems"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faTwitter} size="sm" />
                </a>
              </li>
              <li class="list-inline-item">
                <a
                  href="https://facebook.com/codingblackfemales"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebook} size="sm" />
                </a>
              </li>
              <li class="list-inline-item">
                <a
                  href="https://linkedin.com/company/codingblackfemales"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="sm" />
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

export default Footer;
