import React from "react";
import Aux from "../../hoc/Aux";

const layout = props => (
  // we create toolbar component inside the below div

  <Aux>
    <div></div>
    <main>{props.children}</main>
  </Aux>
);

export default layout;
