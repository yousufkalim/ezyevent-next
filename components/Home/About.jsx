import React from 'react';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import tickMark from '../../public/assets/img/common/tick.png';
import hellMobile from '../../public/assets/img/home/Home-about.png';

const About = () => {
  return (
    <section className={styles.aboutContainer}>
      <div className={styles.aboutDiv}>
        <h2 className={styles.aboutHeading}>
          About <span className={styles.esyText}>Ezy</span> Event{' '}
        </h2>
      </div>
      <div className={styles.featuresContainer}>
        <div className='featureEvent'>
          <h2 className={styles.aboutH2}>
            <Image src={tickMark} alt='Event management' />
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
            <Image src={tickMark} alt='User-friendly' />
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
            <Image src={tickMark} alt=' in-app messaging' />
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
            <Image src={tickMark} alt=' Technical support' />
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
        {/* <Image src={helloMobile} alt='About Ezy Event' /> */}
      </div>
    </section>
  );
};

export default About;
