import cn from "classnames";
import React, { useEffect, useState } from "react";
import styles from "./slideshow.module.scss";
import theme from "./slideshow.theme.module.scss";

const Slideshow = props => {
  const { images } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [counter, setCounter] = useState(0);
  const [isRollOver, setIsRollOver] = useState(false);

  useEffect(() => {
    var timerID = setInterval(() => tick(), 100);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  const tick = () => {
    if (!isRollOver) {
      if (counter < 2 * 10) {
        setCounter(counter + 1);
      } else {
        setCounter(0);
        showSlide(currentIndex + 1);
      }
    } else {
      setCounter(0);
    }
  };

  const showSlide = index => {
    if (index < 0) {
      index = images.length - 1;
    } else if (index > images.length - 1) {
      index = 0;
    }
    setCurrentIndex(index);
  };

  return (
    <div
      className={cn(styles.host, isRollOver ? styles.inactive : "", theme.host)}
      onMouseOver={() => setIsRollOver(true)}
      onMouseLeave={() => setIsRollOver(false)}
    >
      <ul className={styles.slider}>
        {images.map((image, index) => {
          const { url } = image;
          return (
            <li
              className={cn(
                styles.slide,
                currentIndex === index ? styles.visible : "",
                theme.slide
              )}
              key={index}
              style={{ backgroundImage: `url(${url})` }}
            />
          );
        })}
      </ul>
      <div
        className={cn(styles.prevButton, theme.prevButton)}
        onClick={() => showSlide(currentIndex - 1)}
      />
      <div
        className={cn(styles.nextButton, styles.nextButton)}
        onClick={() => showSlide(currentIndex + 1)}
      />

      <ul className={styles.bulletBar}>
        {images.map((image, index) => (
          <li
            className={cn(
              styles.bullet,
              currentIndex === index ? styles.selected : "",
              theme.bullet
            )}
            key={index}
            onClick={() => showSlide(index)}
          ></li>
        ))}
      </ul>
    </div>
  );
};

export default Slideshow;
