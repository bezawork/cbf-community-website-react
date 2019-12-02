import React from "react";
const events = props => (
  <React.Fragment>
    <section id="events" class="page-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading text-uppercase">Events</h2>
            <h3 class="section-subheading text-muted">
              Sign up and come along to our events
            </h3>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <p>
              We have around two events every month. If you have any questions,
              or would like to sponsor a future event, then get in touch{" "}
              <a
                href="mailto:info@codingblackfemales.com?Subject=Get Involved"
                target="_top"
              >
                info@codingblackfemales.com
              </a>
              . Sign up opens 4 weeks before each event.
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">
                  Coding Black Females Christmas Party{" "}
                  <span class="text-muted">@ MOO</span>
                  <span class="text-muted">, London</span>{" "}
                </h5>
                <h6 class="card-subtitle mb-2 text-muted">
                  18th December 2019
                </h6>
                <h6 class="card-subtitle mb-2 text-muted">6pm - 9pm</h6>
                <p class="card-text">Join us for some fun to wrap up 2019!</p>
                <p>
                  <a
                    href="https://www.meetup.com/Coding-Black-Females/events/266088407/"
                    target="_blank"
                    class="btn btn-primary"
                  >
                    Sign Up on Meetup
                  </a>
                  <a
                    href="https://www.eventbrite.co.uk/e/coding-black-females-christmas-party-tickets-84160104137"
                    target="_blank"
                    class="btn btn-primary"
                  >
                    Sign Up on Eventbrite
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </React.Fragment>
);

export default events;
