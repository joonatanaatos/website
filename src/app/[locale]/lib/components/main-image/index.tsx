'use client';

import Image from 'next/image';
import { Carousel } from '@mantine/carousel';
import classes from './index.module.css';
import Autoplay from 'embla-carousel-autoplay';

const autoplay = Autoplay({ delay: 10000 });
const images = [
  { src: '/images/joonatan-piano.png', alt: 'Joonatan Piano' },
  { src: '/images/joonatan-kippari.png', alt: 'Joonatan Kippari' },
  { src: '/images/joonatan-sere.png', alt: 'Joonatan Sere' },
];

function MainImage() {
  return (
    <div className={classes.container}>
      <Carousel
        loop
        plugins={[autoplay]}
        style={{ width: '100%', height: 'auto' }}
        withIndicators
      >
        {images.map((image) => (
          <Carousel.Slide key={image.src}>
            <Image
              src={image.src}
              alt={image.alt}
              loading="eager"
              width="0"
              height="0"
              sizes="100%"
              className={classes.image}
              style={{ width: '100%', height: 'auto' }}
            />
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
}

export default MainImage;
