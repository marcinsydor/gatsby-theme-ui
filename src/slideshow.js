import React, { useEffect, useState } from "react";
import styles from "./slideshow.module.scss";

const Slideshow = props => {
  const { images, classes = {} } = props;
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
      className={`${styles.host} ${isRollOver ? styles.inactive : ""} ${props.className}`}
      onMouseOver={() => setIsRollOver(true)}
      onMouseLeave={() => setIsRollOver(false)}
    >
      <ul className={styles.slider}>
        {images.map((image, index) => {
          const { url, title } = image;
          return (
            <li
              className={`${styles.slide} ${
                currentIndex === index ? styles.visible : ""
              }`}
              key={index}
            >
              <img alt={title} src={url} />
            </li>
          );
        })}
      </ul>
      <div
        className={`${styles.button} ${styles.prevButton} ${classes.prevButton}`}
        onClick={() => showSlide(currentIndex - 1)}
      />
      <div
        className={`${styles.button} ${styles.nextButton}`}
        onClick={() => showSlide(currentIndex + 1)}
      />
    </div>
  );
};

export default Slideshow;