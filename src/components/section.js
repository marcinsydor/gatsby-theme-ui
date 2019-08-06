import cn from "classnames";
import BackgroundImage from "gatsby-background-image";
import React from "react";
import styles from "./section.module.scss";

const Section = props => {
  const {
    children,
    index,
    backgroundColor,
    type,
    height,
    compact,
    fullWidth,
    contentFullWidth,
    centerVertically,
    fluid
  } = props;

  const customStyles = {
    ...(backgroundColor && { backgroundColor: backgroundColor }),
    ...(height && { minHeight: height })
  };

  // TOOD fix section random class
  const classNames = cn(
    styles.host,
    `section${Math.floor(Math.random() * 1000)}`,
    `${styles[type]}`,
    compact ? styles.compact : null,
    fullWidth ? styles.fullWidth : null,
    contentFullWidth ? styles.contentFullWidth : null,
    centerVertically ? styles.centerVertically : null
  );

  return fluid ? (
    <BackgroundImage
      key={index}
      Tag="section"
      fluid={fluid}
      style={customStyles}
      className={classNames}
    >
      {children}
    </BackgroundImage>
  ) : (
    <section style={customStyles} className={classNames}>
      {children}
    </section>
  );
};

export default Section;
