import cn from "classnames";
import BackgroundImage from "gatsby-background-image";
import React from "react";
import styles from "./section.module.scss";

const Section = props => {
  const {
    children,
    backgroundColor,
    height,
    compact,
    fullWidth,
    contentFullWidth,
    fluid
  } = props;

  const customStyles = {
    ...(backgroundColor && { backgroundColor: backgroundColor }),
    ...(height && { minHeight: height })
  };

  return fluid ? (
    <BackgroundImage
      Tag="section"
      fluid={fluid}
      style={customStyles}
      className={cn(
        styles.host,
        compact ? styles.compact : null,
        fullWidth ? styles.fullWidth : null,
        contentFullWidth ? styles.contentFullWidth : null
      )}
    >
      {children}
    </BackgroundImage>
  ) : (
    <section
      style={customStyles}
      className={cn(
        styles.host,
        compact ? styles.compact : null,
        fullWidth ? styles.fullWidth : null,
        contentFullWidth ? styles.contentFullWidth : null
      )}
    >
      {children}
    </section>
  );
};

export default Section;
