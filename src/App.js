import React, { Component } from "react";
import MainContent from "./components/MainContent/MainContent";
import Footer from "./components/footer/Footer";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <MainContent />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
