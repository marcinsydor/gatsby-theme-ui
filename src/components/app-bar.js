import cn from "classnames";
import PropTypes from "prop-types";
import React from "react";
import useEnter from "../hooks/enter.hook";
import styles from "./app-bar.module.scss";

const AppBar = props => {
  const enter = useEnter();

  return (
    <header className={cn(styles.host, enter && styles.enter)}>
      <div className={styles.content}>{props.children}</div>
    </header>
  );
};

AppBar.propTypes = {
  siteTitle: PropTypes.string
};

AppBar.defaultProps = {
  siteTitle: ``
};

export default AppBar;
