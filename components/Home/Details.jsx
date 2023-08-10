import React from 'react';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import people from '../../public/assets/img//home/Home-details.png';
import { ReactComonent as BtnArrow } from '../../public/assets/img/common/menu-arrow.svg';

const Details = () => {
  return (
    <section className={`${styles.details_section} ${styles.section}`} id='section_details'>
      <div className={styles.contactData}>
        <div className={styles.contentContainer}>
          <h3 className={styles.headingH3}>Ezy Event</h3>
          <h2 className={styles.headingH2}>Ensures audience engagement</h2>
          <p className={styles.paraContact}>
            Ezy Event ensures audience engagement with its <br /> dynamic features and interactive
            tools. From <br /> personalized alerts that keep attendees informed <br />
            about event updates to centralized communication <br />
            that fosters seamless interaction between <br />
            organizers and participants
          </p>
          <div className={styles.btnContainer}>
            <button className={styles.contactbtn}>
              Contact Us
              <BtnArrow className={styles.btnArrow} alt='About Ezy Event' />
            </button>
          </div>
        </div>
        <div className={styles.peopleContainer}>
          <Image className={styles.people} src={people} alt='About Ezy Event' />
        </div>
      </div>
    </section>
  );
};

export default Details;
