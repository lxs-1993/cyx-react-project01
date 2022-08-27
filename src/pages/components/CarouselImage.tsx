import Carousel from 'nuka-carousel';
import { useState } from 'react';
import styles from './index.less';

export const CarouselImage = () => {
  const [slideIndex, setSlideIndex] = useState<number>(0);

  return (
    <Carousel
      cellSpacing={-60}
      autoplay
      dragging
      wrapAround
      slideIndex={slideIndex}
      defaultControlsConfig={{
        prevButtonStyle: { display: 'none' },
        nextButtonStyle: { display: 'none' },
      }}
      afterSlide={(newSlideIndex) => setSlideIndex(newSlideIndex)}
    >
      <div className={styles.banner1Img}></div>
      <div className={styles.banner2Img}></div>
      <div className={styles.banner3Img}></div>
    </Carousel>
  );
};
