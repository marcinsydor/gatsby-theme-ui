import cn from "classnames";
import React from "react";
import styles from "./button.module.scss";

export default props => {
  const externalStyles = props.styles || {};
  return (
    <a
      className={cn(styles.host, externalStyles.host)}
      href={props.href || "#"}
      onClick={props.onClick}
    >
      {props.children}
    </a>
  );
};
