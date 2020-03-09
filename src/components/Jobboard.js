import React from "react";
import Footer from "./footer/Footer";
import { Link } from "react-router-dom";
const jobboard = props => (
  <React.Fragment>
    <div
      class="container"
      style={{
        margin: "11em 0em 5em 3em"
      }}
    >
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading text-uppercase">Job Board</h2>
          <h3 class="section-subheading text-muted">
            Check out the Jobs, Internships and Apprenticeships which are
            currently available
          </h3>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <p>
            If you'd like to list a job here, please get in touch{" "}
            <a
              href="mailto:info@codingblackfemales.com?Subject=Job Board"
              target="_top"
            >
              info@codingblackfemales.com
            </a>
            .
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">
                Codurance Apprenticeship{" "}
                <span class="text-muted"> 3 Sutton Lane, London</span>
              </h5>
              <h6 class="card-subtitle mb-2 text-muted">
                Start Date: 2nd March 2020
              </h6>
              <h6 class="card-subtitle mb-2 text-muted">Location: London</h6>
              <h6 class="card-subtitle mb-2 text-muted">
                Type: Apprenticeship
              </h6>
              <h6 class="card-subtitle mb-2 text-muted">Paid: Yes</h6>
              <p class="card-text">
                If you have a passion for learning and are ready for a chance to
                learn technologies and practices needed to gain peer-recognition
                of being at the level of a Software Craftsperson, then we look
                forward to receiving your application.
              </p>
              <p>
                <span
                  style={{
                    margin: "0em 1em 0em 0em"
                  }}
                >
                  <a
                    href="https://drive.google.com/file/d/1Yo7ku-HZFWmFuVVAhdXQJQ3RC4XGYWI1/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn btn-primary"
                  >
                    Apprenticeship Description
                  </a>
                </span>
                <span
                  style={{
                    margin: "0em 1em 0em 0em"
                  }}
                >
                  <Link
                    to={`/jobboard`}
                    data-toggle="modal"
                    data-target="#exampleModal"
                    data-whatever="@mdo"
                    class="btn btn-primary"
                  >
                    Interview Process
                  </Link>
                </span>

                <a
                  href="https://hire.withgoogle.com/public/jobs/codurancecom/view/P_AAAAABlAABNOcIsijEdYoW"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn btn-primary"
                >
                  Apply
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

export default jobboard;
