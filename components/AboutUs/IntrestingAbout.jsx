import React from 'react';
import Styles from '../../styles/Aboutus.module.css';
import Image from 'next/image';
import Eventimg from '../../public/assets/img/about/aboutimg.png';
import book from '../../public/assets/img/about/class.png';
import arrow from '../../public/assets/img/about/double_arrow.png';
import invertory from '../../public/assets/img/about/inventory.png';

const IntrestingAbout = () => {
  return (
    <section className={Styles.Intresting_About}>
      <div className={Styles.img_container}>
        <Image src={Eventimg} alt='Apple Logo' />
      </div>
      <div className={Styles.int_data_container}>
        <h2 className={Styles.int_heading}>
          {' '}
          Something <br /> <span className={Styles.heading_span}>Interesting </span> About us
        </h2>
        <p className={Styles.int_Para}>
          We believe that every event has the potential to be <br /> extraordinary. Our mission is
          to empower event <br /> organizers, service providers, and attendees alike, by <br />{' '}
          offering a user-friendly platform that simplifies <br /> the event planning process
        </p>
      </div>
      <div className={Styles.fratures}>
        <div className={Styles.feature1}>
          <Image src={arrow} alt='Apple Logo' />

          <h2>Itinerary </h2>
          <p>
            Your Guide to a Memorable Journey: Follow <br />
            the Itinerary and Create Lasting Memories
          </p>
        </div>
        <div className={Styles.feature1}>
          <Image src={book} alt='Apple Logo' />

          <h2>Activity </h2>
          <p>
            Dive into the World of Activities and Craft <br /> Unforgettable Experiences for Your
            Guests
          </p>
        </div>
        <div className={Styles.feature1}>
          <Image src={invertory} alt='Apple Logo' />

          <h2>Invite People </h2>
          <p>
            xtend Invitations and Gather Your Beloved <br /> Circle to Celebrate Together
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntrestingAbout;
