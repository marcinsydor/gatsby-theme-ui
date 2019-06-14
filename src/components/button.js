import cn from "classnames";
import React from "react";
import styles from "./button.module.scss";
import theme from "./button.theme.module.scss";

export default props => (
  <a className={cn(styles.host, theme.host)}>{props.children}</a>
);
