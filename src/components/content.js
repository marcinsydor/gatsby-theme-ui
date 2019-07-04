import cn from "classnames";
import React from "react";
import styles from "./content.module.scss";

const Content = props => {
  const { children } = props;

  return <div className={cn(styles.host)}>{children}</div>;
};

export default Content;
