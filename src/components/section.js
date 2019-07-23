import cn from "classnames";
import BackgroundImage from "gatsby-background-image";
import React from "react";
import styles from "./section.module.scss";

const Section = props => {
  const {
    children,
    type,
    backgroundColor,
    backgroundImage,
    height,
    compact,
    fullWidth,
    contentFullWidth,
    fluid
  } = props;

  const customStyles = {
    ...(backgroundColor && { backgroundColor: backgroundColor }),
    ...(backgroundImage && { backgroundImage: `url(${backgroundImage})` }),
    ...(height && { minHeight: height })
  };

  return (
    <BackgroundImage
      Tag="section"
      fluid={fluid}
      style={customStyles}
      className={cn(
        styles.host,
        styles[type],
        compact ? styles.compact : null,
        fullWidth ? styles.fullWidth : null,
        contentFullWidth ? styles.contentFullWidth : null
      )}
      backgroundColor={`#040e18`}
    >
      {children}
    </BackgroundImage>
  );
};

export default Section;
