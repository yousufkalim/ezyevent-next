import React from 'react';
import Styles from '../../styles/Aboutus.module.css';
import Image from 'next/image';
import Partners from '../../public/assets/img/about/partners.png';

const OurMission = () => {
  return (
    <section className={Styles.OurMission_Container}>
      <div className={Styles.mission_headings}>
        <div className={Styles.heading_setion1}>
          <h2>
            {' '}
            Our <br /> Mission <br /> <span>&</span> Vision
          </h2>
        </div>
        <div className={Styles.heading_section2}>
          <div className={Styles.shadow}>
            <div className={Styles.shape}></div>
          </div>
          <h3> About us</h3>
          <p>
            Our dedicated team is driven by the belief <br /> that events should be memorable,
            enjoyable, <br /> and hassle-free. Whether you're planning a <br /> small gathering or a
            grand celebration,{' '}
          </p>
        </div>
      </div>
      <div className={Styles.Para_div}>
        <div className={Styles.paras_after}>
          <p>
            To empower event organizers and attendees with an innovative platform that simplifies
            event planning, fosters seamless communication
          </p>
          <p className={Styles.p_color}>creates unforgettable experiences with Ezyevent</p>
        </div>
        <div className={Styles.paras_right}>
          <p className={Styles.p_color}>
            Together, let's transform ordinary events into extraordinary memories
          </p>
          <p>
            To revolutionize the event industry by providing a user-centric platform that elevates
            event experiences, fosters meaningful connections, and sparks joy in every celebration
          </p>
        </div>
      </div>
      <div className={Styles.partners}>
        <Image src={Partners} alt='Apple Logo' />
        <h2>
          {' '}
          Our Trusted <br />
          Patners{' '}
        </h2>
      </div>
    </section>
  );
};

export default OurMission;
