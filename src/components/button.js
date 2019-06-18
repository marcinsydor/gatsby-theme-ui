import React from "react";
import { StyledWarpper } from "./button.styles";

export default props => (
  <StyledWarpper href={props.href || "#"} onClick={props.onClick}>
    {props.children}
  </StyledWarpper>
);
