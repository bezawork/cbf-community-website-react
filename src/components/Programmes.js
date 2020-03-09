import React from "react";
import Footer from "./footer/Footer";
const programmes = props => (
  <React.Fragment>
    <div
      class="container"
      style={{
        margin: "11em 0em 5em 3em"
      }}
    >
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading text-uppercase">Our Programmes</h2>
          <h3 class="section-subheading text-muted">
            Register your interest, or apply to our programmes
          </h3>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <p></p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">
                TDD Bootcamp <span class="text-muted">London</span>
              </h5>
              <h6 class="card-subtitle mb-2 text-muted">Time: 8am - 10am</h6>
              <h6 class="card-subtitle mb-2 text-muted">
                Start Date: Weds 26th Feb 2020
              </h6>
              <h6 class="card-subtitle mb-2 text-muted">
                End Date: Weds 1st Apr 2020
              </h6>
              <h6 class="card-subtitle mb-2 text-muted">
                Course Duration: 6 weeks
              </h6>
              <h6 class="card-subtitle mb-2 text-muted">
                Location: Codurance, 3rd Floor, 3 Sutton Ln, Farringdon, London
                EC1M 5PU
              </h6>
              <h6 class="card-subtitle mb-2 text-muted">
                Application Closing Date: 14th Feb 2020
              </h6>
              <p class="card-text">
                The course will cover an introduction to testing, classic TDD,
                clean code and refactoring
                <br /> Prerequisites: Familiarity with Object Oriented
                Programming and/or Ability to write Unit Tests
              </p>
              <p>
                <a
                  href="https://forms.gle/D2F9j3me33fFapcc8"
                  target="_blank"
                  class="btn btn-primary"
                >
                  Apply
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div class="row">
        <div class="col-lg-12">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">
                Mentor Programme <span class="text-muted"> London</span>
              </h5>
              <h6 class="card-subtitle mb-2 text-muted">
                Proposed Time: Unknown
              </h6>
              <h6 class="card-subtitle mb-2 text-muted">Start Date: Unknown</h6>
              <p class="card-text">
                We are working with a sponsor to set up a mentor programme.
                Mentors would be provided by the sponsor, and they will work
                with members to develop their skills in tech. Please register
                your interest, and we'll get in touch once we're open to
                applications
              </p>
              <p>
                <a
                  href="https://forms.gle/kVroXrCjiQu6SMjj8"
                  target="_blank"
                  class="btn btn-primary"
                >
                  Register your interest
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div class="row">
        <div class="col-lg-12">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">
                Mini Incubator Programme <span class="text-muted"> London</span>
              </h5>
              <h6 class="card-subtitle mb-2 text-muted">
                Proposed Time: Unknown
              </h6>
              <h6 class="card-subtitle mb-2 text-muted">Start Date: Unknown</h6>
              <p class="card-text">
                We are in the process of creating a free programme with Do it
                Now Now for our members who are currently running businesses.
                They have put together a Productivity Quiz in order to assess
                your requirements, but also help you understand where you are on
                your journey.
                <br /> We know why 90% of businesses fail in their first three
                years. We want to help you avoid all those pitfalls. The FREE
                productivity quiz will help you understand where you are in your
                business journey, and give you a picture of where you should be
                heading in the future. It will take you about 10 minutes of
                focused time. Sit down, relax and answer honestly!
              </p>
              <p>
                <a
                  href="https://doitnownow.typeform.com/to/q6nlJ8"
                  target="_blank"
                  class="btn btn-primary"
                >
                  Productivity Quiz
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </React.Fragment>
);
export default programmes;
