import React from "react";
import Aux from "../../hoc/Aux";
import { Container } from "react-bootstrap";

const layout = props => (
  // we create toolbar component inside the below div
  <Container>
    <Aux>
      <div></div>
      <main>{props.children}</main>
    </Aux>
  </Container>
);

export default layout;
