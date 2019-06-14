import React, { useState } from "react";
import useEnter from "../hooks/enter.hook";
import styles from "./lightbox.module.scss";
import Loader from "./loader";

const Lightbox = props => {
  const enter = useEnter();

  const { images, imageIndex } = props;
  const [currentIndex, setCurrentIndex] = useState(imageIndex || 0);
  const [currentImage, setCurrentImage] = useState(
    images && images.length > 0 ? images[currentIndex] : []
  );
  const [loading, setLoading] = useState(false);

  // const delay = ms => new Promise(yea => setTimeout(yea, ms));

  const showImage = async index => {
    if (index < 0) {
      index = images.length - 1;
    } else if (index > images.length - 1) {
      index = 0;
    }

    setLoading(true);
    // awai/t delay(111000);

    setCurrentIndex(index);
    setCurrentImage(images[index]);
  };

  const handleImageLoaded = async () => {
    setLoading(false);
  };

  const handleImageErrored = () => {
    setLoading(false);
  };

  return (
    <div className={`${styles.root} ${enter ? styles.enter : ""}`}>
      <img
        className={styles.hiddenImage}
        alt={currentImage.title}
        src={currentImage.url}
        onLoad={() => handleImageLoaded()}
        onError={() => handleImageErrored()}
      />

      <div
        className={`${styles.image} ${!loading ? styles.visible : ""}`}
        style={{ backgroundImage: `url(${currentImage.url})` }}
      />

      <div className={`${styles.loader} ${loading ? styles.visible : ""}`}>
        <Loader />
      </div>

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
