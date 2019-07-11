import cn from "classnames";
import { Link } from "gatsby";
import React, { useState } from "react";
import styles from "./menu.module.scss";

const Menu = props => {
  const [isOpen, setIsOpen] = useState(false);
  const { links } = props;
  const linkElements = links.map((item, index) => (
    <li className={styles.link} key={index}>
      <Link to={`/${item.slug}`} onClick={() => openMenu(false)}>
        {item.title}
      </Link>
    </li>
  ));

  const openMenu = o => {
    setIsOpen(o);
  };

  return (
    <div className={cn(styles.host, isOpen && styles.open)}>
      <ul className={cn(styles.links, isOpen && styles.open)}>
        {linkElements}
      </ul>
      <div
        className={cn(styles.menuButton, isOpen && styles.open)}
        onClick={() => openMenu(!isOpen)}
      >
        {isOpen}
      </div>
    </div>
  );
};

export default Menu;
