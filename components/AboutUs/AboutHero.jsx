import React from 'react';
import Styles from '../../styles/Aboutus.module.css';
import Image from 'next/image';
import apple from '../../public/assets/img/common/Home-Apple-download.png';
import google from '../../public/assets/img/common/Home-Play-store-Download.png';

const AboutHero = () => {
  return (
    <section className={Styles.about_section}>
      <div className={Styles.data_container}>
        <h1 className={Styles.about_heading}> About Us</h1>
        <p className={Styles.about_para}>
          <strong className={Styles.strong_color}>Join us</strong> in creating unforgettable
          moments, forging <br />
          lasting connections, and elevating event <br />
          experiences to new heights
        </p>
        <div className={Styles.downloadLogos}>
          <a href='/'>
            <Image src={apple} alt='Apple Logo' />
          </a>
          <a href='/'>
            <Image src={google} alt='Play store Logo' />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
