import React from 'react';
import Image from 'next/image';
import Header from '../common/Header';
import styles from '../../styles/EventOrganiser.module.css';
import people from '../../public/assets/img/EventOrg/realSounds.png';
import star from '../../public/assets/img/EventOrg/Group.png';
import { ReactComonent as MenuArrow } from '../../public/assets/img/common/menu-arrow.svg';

const YesSection = () => {
  return (
    <section className={styles.yes_section}>
      <div className={styles.yes_data_container}>
        <div className={styles.shadow_container}>
          <div className={styles.shape_container}></div>
        </div>
        <h2>
          {' '}
          <span className={styles.yes_span}>
            {' '}
            Yess ! <br />
          </span>{' '}
          Now is Sound <span className={styles.real_span}> Real</span>
        </h2>
        <p>
          ur team at Ezyevent is committed to making your event dreams a <br />
          vivid reality. Experience the magic of seamless event planning{' '}
        </p>
      </div>
      <div className={styles.create_event_container}>
        <Image className={styles.people_img} src={people} alt='About Ezy Event' />
        <div className={styles.event_data}>
          <h2>Now You’re a Event Organiser</h2>
          <h3>
            Everyone Can Easily <br /> <span className={styles.black_span}>Create </span>Event and
            Manage <br /> There Event in one touch
          </h3>
          <p className={styles.create_event_btn}>
            Lets Create Event With us
            <MenuArrow className={styles.arrow} alt='Menu Arrow' fill='#857AEB' />
          </p>
        </div>
      </div>
      <div className={styles.star_section1}>
        <Image className={styles.star1} src={star} alt='About Ezy Event' />
      </div>
      <div className={styles.star_section2}>
        <Image className={styles.star1} src={star} alt='About Ezy Event' />
      </div>
    </section>
  );
};

export default YesSection;
