import cn from "classnames";
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
    contentFullWidth
  } = props;

  const customStyles = {
    ...(backgroundColor && { backgroundColor: backgroundColor }),
    ...(backgroundImage && { backgroundImage: `url(${backgroundImage})` }),
    ...(height && { minHeight: height })
  };

  return (
    <section
      style={customStyles}
      className={cn(
        styles.host,
        styles[type],
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
