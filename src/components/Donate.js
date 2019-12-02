import React from "react";
import DonateButton from "../assets/donatebutton.svg";
const donate = props => (
  <React.Fragment>
    <section id="donate" class="page-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading text-uppercase">Donate</h2>
            <h3 class="section-subheading text-muted">Help us do more</h3>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <p>
              We're trying to do everything we can to provide workshops twice a
              month for Black women who are developing their skills, or changing
              career. With your donations, we'll be able to provide workshops
              for the next generation, and ensure that the tech industry is open
              to everyone.
            </p>
            <p>
              We want to ensure there are role models in the community, so that
              people are able to see that the industry is extremely accessible.
            </p>
            <p>
              You can donate now with PayPal, but if you want more information,
              please{" "}
              <a href="mailto:info@codingblackfemales.com?Subject=Donations">
                get in touch
              </a>
              .
            </p>
            <form
              id="donateButtonForm"
              action="https://www.paypal.com/cgi-bin/webscr"
              method="post"
              target="_top"
            >
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input
                type="hidden"
                name="hosted_button_id"
                value="5JBSXLBULTH6E"
              />
              <input
                id="donateButton"
                type="image"
                src={DonateButton}
                name="submit"
                title="PayPal - The safer, easier way to pay online!"
                alt="Donate with PayPal button"
              />
              <img
                alt=""
                src="https://www.paypal.com/en_GB/i/scr/pixel.gif"
                width="1"
                height="1"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  </React.Fragment>
);

export default donate;
