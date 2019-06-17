import cn from "classnames";
import React from "react";
import styles from "./button.module.scss";

export default props => (
  <a
    className={cn(styles.host, props.className)}
    href={props.href || "#"}
    onClick={props.onClick}
  >
    {props.children}
  </a>
);
