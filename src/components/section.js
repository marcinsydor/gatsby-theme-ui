import cn from "classnames";
import React from "react";
import styles from "./section.theme.module.scss";

const Section = props => {
  const {
    children,
    className,
    type,
    backgroundColor,
    backgroundImage,
    height
  } = props;

  return (
    <section
      style={{
        backgroundColor: backgroundColor,
        backgroundImage: `url(${backgroundImage})`,
        minHeight: height
      }}
      className={cn(styles.host, styles[type], className)}
    >
      {children}
    </section>
  );
};

export default Section;
