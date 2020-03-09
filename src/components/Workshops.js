import React from "react";
import Footer from "./footer/Footer";
const workshops = props => (
  <React.Fragment>
    <section id="workshops" class="page-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading text-uppercase">Workshops</h2>
            <h3 class="section-subheading text-muted">
              Find out about our workshops
            </h3>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <h2 class="detail-heading">
              Learn Together / Code Together Workshop
            </h2>
            <p>
              At least once a month (usually twice a month), we hold a Learn
              Together / Code Together workshop. These run between 6pm and 9pm.
              Head over to the{" "}
              <a
                href="https://www.meetup.com/Coding-Black-Females/events/"
                target="_black"
              >
                Coding Black Females meetup
              </a>{" "}
              page to sign up!
            </p>

            <h3 class="detail-subheading">6.00 - 6.30: Arrival/Setup</h3>
            <p>
              When you arrive, get settled in, and get your laptop setup. We
              recommend downloading{" "}
              <a
                href="https://code.visualstudio.com/download"
                target="_blank"
                rel="noopener noreferrer"
              >
                VS Code
              </a>
              , but if you have another favourite development environment, then
              use that instead. If you want to contribute to our project, you’ll
              need a GitHub account, and you can take a look at our{" "}
              <a
                href="https://github.com/CodingBlackFemales"
                target="_blank"
                rel="noopener noreferrer"
              >
                Coding Black Females GitHub
              </a>
              .
            </p>

            <h3 class="detail-subheading">6.30 - 7.00: Talk/Discussion</h3>
            <p>
              Sometimes we’ll have a talk, sometimes we’ll have a discussion
              about a topic relevant to us, or that someone has raised. If
              there’s no talk or discussion, we can tuck straight in to coding.
              Food should usually arrive between 6.30 and 7.00.
            </p>

            <h3 class="detail-subheading">7.00 - 9.00: Learning/Coding</h3>
            <p>
              {" "}
              If you’re new to coding, or there is a new technology that you’d
              like to learn, then we recommend using codebar, and following a
              tutorial. There will be plenty of people in the room that can
              help! If you’re more experienced, or feel comfortable contributing
              to our site, then head to GitHub and choose a task. The tasks we
              have range from adding a link or picture onto a page, to
              connecting to a new API.
            </p>

            <h3 class="detail-subheading">What will I need?</h3>
            <ul>
              <li>
                <a
                  href="https://code.visualstudio.com/download"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Code Editor - VS Code:{" "}
                </a>
                Or another favorite editor
              </li>
              <li>Ask about joining the WhatsApp group</li>
              <li>Ask about joining the Slack group</li>
            </ul>
            <h4 class="detail-subheading">Learner?</h4>
            <ul>
              <li>
                <a
                  href="http://tutorials.codebar.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Codebar Tutorials
                </a>
              </li>
            </ul>
            <h4 class="detail-subheading">Coder?</h4>
            <ul>
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/CodingBlackFemales"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Coding Black Females GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </React.Fragment>
);

export default workshops;
