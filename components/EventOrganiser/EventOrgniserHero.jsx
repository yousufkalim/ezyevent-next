import React from 'react';
import Image from 'next/image';
import Header from '../common/Header';
import styles from '../../styles/EventOrganiser.module.css';
import evetHero from '../../public/assets/img/EventOrg/hero1.png';
import Bar from '../../public/assets/img/EventOrg/scrollbar.png';
import star from '../../public/assets/img/EventOrg/Group.png';
import icon1 from '../../public/assets/img/EventOrg/icon1.png';
import icon2 from '../../public/assets/img/EventOrg/icon2.png';

const OrganiserHero = () => {
  return (
    <section className={styles.hero_container}>
      <div className={styles.headings_containers}>
        <h1 className={styles.main_heading}>
          <span className={styles.heading_color}>Event</span> <br />
          Orgniser
        </h1>
      </div>
      <div className={styles.shadow}>
        <div className={styles.shape}></div>
      </div>
      <div className={styles.object_container}>
        <Image
          className={styles.imgThree}
          src={evetHero}
          alt='About Ezy Event'
          width={700}
          height={794}
        />
      </div>
      <div className={styles.star_img_container}>
        <Image className={styles.star} src={star} alt='About Ezy Event' />
      </div>
      <div className={styles.star_img_c}>
        <Image className={styles.star2} src={star} alt='About Ezy Event' />
      </div>
      <div className={styles.bar_container}>
        <Image className={styles.bar_arrow_img} src={Bar} alt='About Ezy Event' />
      </div>
      <div className={styles.project_done_box}>
        <Image className={styles.project_done_img} src={icon1} alt='About Ezy Event' />
        <div className={styles.project_text_box}>
          <h3>100k</h3>
          <p>Project done</p>
        </div>
      </div>
      <div className={styles.success_rate_box}>
        <Image className={styles.success_rate_img} src={icon1} alt='About Ezy Event' />
        <div className={styles.success_text_box}>
          <h3>99%</h3>
          <p>Success rate</p>
        </div>
      </div>
    </section>
  );
};

export default OrganiserHero;
