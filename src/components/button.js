import cn from "classnames";
import React from "react";
import styles from "./button.module.scss";
import { Link } from "gatsby";

export default props => {
  const externalStyles = props.styles || {};
  return (
    <Link
      className={cn(
        styles.host,
        externalStyles.host,
        props.primary && styles.primary
      )}
      to={props.to}
    >
      {props.children}
    </Link>
    // <a
    //   className={cn(styles.host, externalStyles.host)}
    //   href={props.href || "#"}
    //   onClick={props.onClick}
    // >
    //   {props.children}
    // </a>
  );
};
