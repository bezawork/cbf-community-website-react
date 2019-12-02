import React from "react";
import Aux from "../../hoc/Aux";

const layout = props => (
  // we create toolbar component inside the below div

  <Aux>
    <div></div>
    {props.children}
  </Aux>
);

export default layout;
