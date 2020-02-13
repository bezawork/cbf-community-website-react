import React, { Component } from "react";
import Footer from "./footer/Footer";

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
        <ul>
          {items.map(item => (
            <li key={item.title}>
              {item.title}
              {item.author}
              {item.avatar}
              {item.avatarid}
            </li>
          ))}
        </ul>
      );
    }
  }
}

export default Blog;
