import React from 'react';
import Styles from '../../styles/Aboutus.module.css';
import Image from 'next/image';
import Adeel from '../../public/assets/img/about/Co-founder1.png';
import Bilawal from '../../public/assets/img/about/Co-founder2.png';
import Zain from '../../public/assets/img/about/Co-founder3.png';

const OurFounders = () => {
  return (
    <section className={Styles.OurFounders_Container}>
      <div className={Styles.founders_heading_container}>
        <h2 className={Styles.founder_headingMain}>
          {' '}
          Meet Our <span> Co-founder </span>
        </h2>
        <p className={Styles.ceo_para}>
          Get to know the visionary leader who strives to create <br /> unforgettable memories and
          seamless event journeys for all
        </p>
        <div className={Styles.imageDiv}>
          <div className={Styles.Adeel}>
            <Image src={Adeel} alt='Apple Logo' />
            <h3>Adeel Baig </h3>
            <h4> CEO & Founder</h4>
          </div>
          <div className={Styles.Adeel}>
            <Image src={Bilawal} alt='Apple Logo' />
            <h3>Blawal Asghar </h3>
            <h4> CEO & Founder</h4>
          </div>
          <div className={Styles.Adeel}>
            <Image src={Zain} alt='Apple Logo' />
            <h3>Zain Asif </h3>
            <h4> CEO & Founder</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurFounders;
