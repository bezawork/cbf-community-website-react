import React from "react";
import Footer from "./footer/Footer";
const discounts = props => (
  <React.Fragment>
    <div
      className="container"
      style={{
        margin: "11em 0em 5em 3em"
      }}
    >
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Discounts</h2>
          <h3 className="section-subheading text-muted">
            Find out and use the discounts provided to our members
          </h3>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <p></p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">General Assembly</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                Discount Code:{" "}
                <span
                  style={{
                    textTransform: "none"
                  }}
                >
                  codingblackfemales25
                </span>
              </h6>
              <p class="card-text">
                Terms and conditions: code is valid until 31st December 2020 and
                is not applicable to GA's full-time, part-time or online Circuit
                courses. Once the code is applied, workshop tickets are
                non-transferable (i.e. you will not be able to transfer your
                ticket to another date when the same workshop is running and you
                will not be able to transfer your credit toward a different
                workshop). Discount code can not be retroactively applied to
                workshop tickets already purchased, or used in conjunction with
                another discount code.
              </p>
              <p>
                <a
                  href="https://generalassemb.ly/"
                  target="_blank"
                  class="btn btn-primary"
                >
                  General Assembly
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

export default discounts;
