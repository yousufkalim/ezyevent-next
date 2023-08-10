import React from 'react';
import Image from 'next/image';
import styles from '../../styles/Service.module.css';
import ServiceHero from '../../public/assets/img/servicesP/heroS.png';
import picon from '../../public/assets/img/servicesP/Picon.png';
import sicon from '../../public/assets/img/servicesP/Sicon.png';

const SpHero = () => {
  return (
    <section className={styles.sphero_section}>
      <div className={styles.spheadings_containers}>
        <h1 className={styles.spmain_heading}>
          <span className={styles.spheading_color}>Service</span>
          Provider
        </h1>
      </div>
      <div className={styles.spshadow}>
        <div className={styles.spshape}></div>
      </div>
      <div className={styles.spobject_container}>
        <Image
          className={styles.spimgThree}
          src={ServiceHero}
          alt="About Ezy Event"
        />
      </div>
      <div className={styles.spproject_done_box}>
        <Image
          className={styles.spproject_done_img}
          src={sicon}
          alt="About Ezy Event"
        />
        <div className={styles.spproject_text_box}>
          <h3>100k</h3>
          <p>Project done</p>
        </div>
      </div>
      <div className={styles.spsuccess_rate_box}>
        <Image
          className={styles.spsuccess_rate_img}
          src={picon}
          alt="About Ezy Event"
        />
        <div className={styles.spsuccess_text_box}>
          <h3>99%</h3>
          <p>Success rate</p>
        </div>
      </div>
    </section>
  );
};

export default SpHero;
