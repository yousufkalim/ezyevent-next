import React, { useEffect } from 'react';
import Image from 'next/image';
import Header from 'components/common/Header';
import { useKeenSlider } from 'keen-slider/react';
import styles from '../../styles/Home.module.css';
import 'keen-slider/keen-slider.min.css';
import slider1 from '../../public/assets/img/home/hero-s1.png';
import slider2 from '../../public/assets/img/home/hero-s2.png';
import slider3 from '../../public/assets/img/home/hero-s3.png';

const Hero = () => {
  // keen slider
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      duration: 1000,
      Start: () => {
        clearTimeout(timeout);
      },
      dragEnd: (slider) => {
        timeout = setTimeout(() => {
          slider.next();
        }, 750);
      },
    },
    []
  );

  let timeout;

  useEffect(() => {
    // Cleanup function for the slider when component unmounts
    return () => {
      if (sliderRef.current) {
        console.log('ref', sliderRef.current);
        sliderRef.current.destroy();
      }
      clearTimeout(timeout);
    };
  }, [sliderRef]);

  return (
    <section className={styles.hero}>
      <div className={styles.headings}>
        <h2 className={styles.heading1}>Hello</h2>
        <h1 className='heading2'>
          We transform your event dreams
          <br />
          into extraordinary realities
        </h1>
      </div>
      <div ref={sliderRef} className='keen-slider'>
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

export default Hero;
