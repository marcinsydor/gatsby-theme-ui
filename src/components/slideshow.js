import cn from "classnames";
import React, { useEffect, useState } from "react";
import styles from "./slideshow.theme.module.scss";
import { StyledWrapper, Slider, Slide, Button } from "./slideshow.styles.";

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
    <StyledWrapper
      onMouseOver={() => setIsRollOver(true)}
      onMouseLeave={() => setIsRollOver(false)}
    >
      <Slider>
        {images.map((image, index) => {
          const { url } = image;
          return (
            <Slide
              visible={currentIndex === index}
              key={index}
              style={{ backgroundImage: `url(${url})` }}
            />
          );
        })}
      </Slider>
      <Button onClick={() => showSlide(currentIndex - 1)} />
      <Button isFlipped onClick={() => showSlide(currentIndex + 1)} />

      <ul className={styles.bulletBar}>
        {images.map((image, index) => (
          <li
            className={cn(
              styles.bullet,
              currentIndex === index ? styles.selected : ""
            )}
            key={index}
            onClick={() => showSlide(index)}
          ></li>
        ))}
      </ul>
    </StyledWrapper>
  );
};

export default Slideshow;
