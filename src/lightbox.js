import React, { useState } from "react";
import styles from "./lightbox.module.scss";

const Lightbox = props => {
  const { images, imageIndex } = props;
  const [currentIndex, setCurrentIndex] = useState(imageIndex);
  const [currentImage, setCurrentImage] = useState(images[currentIndex]
  );

  const showImage = index => {
    if (index < 0) {
      index = images.length - 1;
    } else if (index > images.length - 1) {
      index = 0;
    }
    setCurrentIndex(index);
    setCurrentImage(images[index]);
  };

  return (
    <div className={styles.root}>
      <div
        alt={currentImage.title}
        className={styles.image}
        style={{ backgroundImage: `url(${currentImage})` }}
      />

      <div
        className={`${styles.button} ${styles.prevButton}`}
        onClick={() => showImage(currentIndex - 1)}
      />
      <div
        className={`${styles.button} ${styles.nextButton}`}
        onClick={() => showImage(currentIndex + 1)}
      />

      <div
        className={`${styles.button} ${styles.closeButton}`}
        onClick={() => {
          props.toggleLightbox();
        }}
      />
    </div>
  );
};

export default Lightbox;
