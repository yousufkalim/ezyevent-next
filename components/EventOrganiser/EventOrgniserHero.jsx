import React from 'react';
import Image from 'next/image';
import Header from '../common/Header';
import styles from '../../styles/EventOrganiser.module.css';
import evetHero from '../../public/assets/img/EventOrg/hero.png';

const OrganiserHero = () => {
  return (
    <section className={styles.hero_container}>
      <div className={styles.headings_containers}>
        <h1 className={styles.main_heading}>
          <span className={styles.heading_color}>Event</span> Orgniser
        </h1>
      </div>
      <div className={styles.object_container}>
        <Image className={styles.imgThree} src={evetHero} alt='About Ezy Event' />
      </div>
    </section>
  );
};

export default OrganiserHero;
