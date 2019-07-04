import cn from "classnames";
import PropTypes from "prop-types";
import React from "react";
import useEnter from "../hooks/enter.hook";
import styles from "./header.module.scss";

const Header = props => {
  const enter = useEnter();

  return (
    <header className={cn(styles.host, enter && styles.enter)}>
      <div className={styles.content}>{props.children}</div>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
