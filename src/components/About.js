import React from "react";
const about = props => (
  <React.Fragment>
    <section id="about" class="page-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading text-uppercase">About</h2>
            <h3 class="section-subheading text-muted">
              Build | Learn | Support
            </h3>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <p>
              Coding Black Females was created in 2017. We are a nonprofit
              organisation, and our primary aim is to provide opportunities for
              Black female developers to develop themselves, meet familiar
              faces, network, receive support and build relationships through
              having regular meetups.
            </p>
            <p>
              We want to meet you if you've been in the industry for 5 minutes,
              or 10 years, if you work as a freelancer or for a huge
              corporation.
            </p>
            <p>
              We can learn from and inspire each other, and empower the next
              generation to achieve success.
            </p>
            <p>
              If you want to get involved, and help us to build up the community
              of Black female developers, then get in touch{" "}
              <a
                href="mailto:info@codingblackfemales.com?Subject=Get Involved"
                target="_top"
              >
                info@codingblackfemales.com
              </a>
              . We are always looking for speakers, sponsors and collaborators.
            </p>
            <p>
              If you're a Black female developer, and want to come along to our
              sessions, then{" "}
              <a
                href="https://www.meetup.com/Coding-Black-Females"
                target="_top"
              >
                join us
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  </React.Fragment>
);

export default about;
