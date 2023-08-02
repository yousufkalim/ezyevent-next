import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import KeenSlider from 'keen-slider';
import styles from '../../styles/Home.module.css';
import 'keen-slider/keen-slider.min.css';
import slider1 from '../../public/assets/img/home/hero-s1.png';
import slider2 from '../../public/assets/img/home/hero-s2.png';
import slider3 from '../../public/assets/img/home/hero-s3.png';

const HeroSlider = () => {
  const sliderElementRef = useRef(null);
  let slider;
  let autoplayInterval; // Change const to let here

  useEffect(() => {
    // Create the KeenSlider instance when the component mounts
    slider = new KeenSlider(sliderElementRef.current, {
      loop: true,
      duration: 1000,
    });

    // Function to move to the next slide
    const handleAutoplay = () => {
      slider.next();
    };

    // Start autoplay
    autoplayInterval = setInterval(handleAutoplay, 2000); // Set the duration between slides in milliseconds (e.g., 2000ms = 2 seconds)

    // Pause autoplay when the mouse hovers over the slider
    sliderElementRef.current.addEventListener('mouseover', () => {
      clearInterval(autoplayInterval);
    });

    // Resume autoplay when the mouse leaves the slider
    sliderElementRef.current.addEventListener('mouseout', () => {
      autoplayInterval = setInterval(handleAutoplay, 2000);
    });

    // Cleanup function for the autoplay interval when component unmounts
    return () => {
      clearInterval(autoplayInterval);
      slider.destroy(); // Destroy the KeenSlider instance when the component unmounts to prevent memory leaks
    };
  }, []);

  // Text Animation
  const [heading1, setHeading1] = useState(true);
  const [heading2, setHeading2] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setHeading1(false);
      setHeading2(true);
    }, 2000); // 2 seconds

    return () => clearTimeout(timer1);
  }, []);

  return (
    <section className={styles.hero} id='home'>
      <div className={styles.headings}>
        <h2
          className={`${styles.heading1} ${heading1 ? styles.slideOut : ''}`}
          style={{ display: heading1 ? 'inline' : 'none' }}
        >
          Hello
        </h2>
        <h1
          className={`${styles.heading2} ${heading2 ? styles.slideIn : ''}`}
          style={{ display: heading2 ? 'inline' : 'none' }}
        >
          We transform your event dreams into extraordinary realities
        </h1>
      </div>

      <div ref={sliderElementRef} className='keen-slider'>
        <div className='keen-slider__slide'>
          <Image src={slider1} alt='slider1' height={1000} width={1920} />
        </div>
        <div className='keen-slider__slide'>
          <Image src={slider2} alt='slider2' height={1000} width={1920} />
        </div>
        <div className='keen-slider__slide'>
          <Image src={slider3} alt='slider3' height={1000} width={1920} />
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
