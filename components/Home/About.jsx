import React from 'react';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import tickMark from '../../public/assets/img/common/tick.png';
import helloMobile from '../../public/assets/img/home/Home-about.png';
import scrollBar from '../../public/assets/img/home/scrollbar.png';
import appleDownload from '../../public/assets/img/home/Home-Apple-download.png';
import playStoreDownload from '../../public/assets/img/home/Home-Play-store-Download.png';

const About = () => {
  return (
    <section className={`${styles.aboutContainer} ${styles.section}`} id='section_about'>
      <div className={styles.aboutDiv}>
        <h2 className={styles.aboutHeading}>
          About <span className={styles.esyText}>Ezy</span> Event{' '}
        </h2>
      </div>
      <div className={styles.dataContainer}>
        <div className={styles.featuresContainer}>
          <div className='featureEvent'>
            <h2 className={styles.aboutH2}>
              <Image className={styles.tickMark} src={tickMark} alt='Event management' />
              Event management
            </h2>
            <p className={styles.aboutParagraph}>
              Innovative event management <br />
              platform simplifying event <br />
              organization and attendance.
            </p>
          </div>
          <div className='featureUser'>
            <h2 className={styles.aboutH2}>
              <Image className={styles.tickMark} src={tickMark} alt='User-friendly' />
              User-friendly
            </h2>
            <p className={styles.aboutParagraph}>
              User-friendly interface for easy event <br />
              creation and management. Features <br />
              include event creation
            </p>
          </div>
          <div className='featureInApp'>
            <h2 className={styles.aboutH2}>
              <Image className={styles.tickMark} src={tickMark} alt=' in-app messaging' />
              in-app messaging
            </h2>
            <p className={styles.aboutParagraph}>
              Seamless communication through <br />
              in-app messaging and push <br />
              notifications.
            </p>
          </div>
          <div className='featureTechnical'>
            <h2 className={styles.aboutH2}>
              <Image className={styles.tickMark} src={tickMark} alt=' Technical support' />
              Technical support
            </h2>
            <p className={styles.aboutParagraph}>
              Technical support available for user <br />
              inquiries and assistance during <br />
              event planning.
            </p>
          </div>
        </div>
        <div className={styles.aboutPhone}>
          <Image className={styles.aboutPhoneImg} src={helloMobile} alt='About Ezy Event' />
        </div>
        <div className={styles.appStores}>
          <div className={styles.scrollBar}>
            <Image className={styles.scrollBarImg} src={scrollBar} alt='Scrool Bar' />
          </div>
          <div>Scroll Down</div>
          <div className={styles.appDownloadDiv}>
            <div className={styles.appleDownload}>
              <Image src={appleDownload} alt='Apple Download Link' />
            </div>
            <div className={styles.playStoreDownload}>
              <Image src={playStoreDownload} alt='Play Store Download Link' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
