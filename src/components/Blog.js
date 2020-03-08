import React, { Component } from "react";
import Footer from "./footer/Footer";
import ClapIcon from "../assets/clap.svg";
import LikeIcon from "../assets/like.svg";

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch(
      "https://medium-widget-api.pixelpoint.io/api/v1/articles?resource=http://medium.com/codingblackfemales&limit=10"
    )
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            items: result
          });
          console.log("check :" + JSON.stringify(this.state.items));
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }
  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <React.Fragment>
          <section id="testimonials" class="page-section">
            <div class="container">
              <div class="row">
                <div class="col-lg-12 text-center">
                  <h2 class="section-heading text-uppercase">Blog</h2>
                  <h3 class="section-subheading text-muted">
                    Read our stories
                  </h3>
                </div>
              </div>
              <div class="row">
                {items.map(item => (
                  <div
                    style={{ margin: "0em 0em 2em 0em" }}
                    class="col-6"
                    key={item.title}
                  >
                    <img
                      src={item.picture.replace(
                        "/max/${size}/",
                        "/fit/1080/607/"
                      )}
                      width="100%"
                      alt="featured picture"
                    ></img>
                    <p
                      style={{
                        margin: "0em",
                        marginBottom: "0.4em",
                        fontSize: "1.1em",
                        lineHeight: "1.2"
                      }}
                    >
                      <strong>{item.title}</strong>{" "}
                    </p>
                    <p
                      style={{
                        margin: "0em 0em 0.5em 0em ",
                        lineHeight: "1.2",
                        fontSize: "0.9em",
                        opacity: 0.7
                      }}
                    >
                      {item.description}
                    </p>
                    <p style={{ margin: "0em ", fontSize: "0.9em" }}>
                      <span style={{ marginRight: "0.5em" }}>
                        <img
                          src={item.avatar}
                          width="30em"
                          style={{ borderRadius: "10em", marginRight: "0.5em" }}
                          alt="Avatar"
                        ></img>
                        {item.author}
                      </span>
                      <span
                        style={{
                          display: "inline-block",
                          marginRight: "0.5em"
                        }}
                      >
                        <img
                          src={LikeIcon}
                          width="15em"
                          alt="Like icon"
                          style={{ marginTop: "-0.2em" }}
                        ></img>
                        {item.likes}
                      </span>
                      <span
                        style={{
                          display: "inline-block",
                          marginRight: "0.5em"
                        }}
                      >
                        <img
                          src={ClapIcon}
                          width="15em"
                          alt="Clap icon"
                          style={{ marginTop: "-0.2em" }}
                        ></img>
                        {item.claps}
                      </span>

                      <span
                        style={{
                          opacity: 0.7
                        }}
                      >
                        {new Date(item.publishAt).toLocaleString("default", {
                          year: "numeric",
                          month: "short",
                          day: "numeric"
                        })}
                      </span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <Footer />
        </React.Fragment>
      );
    }
  }
}

export default Blog;
