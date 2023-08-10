import React from 'react';
import Image from 'next/image';
import styles from '../../styles/Service.module.css';
import cpShadow from '../../public/assets/img/servicesP/cpshadow.png';
import taShadow from '../../public/assets/img/servicesP/tashadow.png';
import { ReactComonent as CreateIcon } from '../../public/assets/img/servicesP/add.svg';
import { ReactComonent as TargetIcon } from '../../public/assets/img/servicesP/contact.svg';
import { ReactComonent as ChatIcon } from '../../public/assets/img/servicesP/chat.svg';
import { ReactComonent as WorkIcon } from '../../public/assets/img/servicesP/work.svg';
import { ReactComonent as ChShadow } from '../../public/assets/img/servicesP/chShadow.svg';
import { ReactComonent as WoShadow } from '../../public/assets/img/servicesP/woShadow.svg';

const Exclusive = () => {
  return (
    <section className={styles.exclusive_section}>
      <div className={styles.ex_heading}>
        <h2>Exclusive Features</h2>
        <p>we ensure your events stand out from the crowd. Embrace the power of exclusivity </p>
      </div>
      <div className={styles.feature_container}>
        <div className={styles.inner_features}>
          <div className={styles.feature_cp}>
            <Image src={cpShadow} alt='Create profile ' className={styles.CpShadow} />
            <CreateIcon alt='icon' />
            <h2>Create Packages </h2>
            <p>Create a one-of-a-kind offering that showcases your talents</p>
          </div>
          <div className={styles.feature_ta}>
            <Image src={taShadow} alt='Create profile ' className={styles.taShadow} />
            <TargetIcon alt='icon' />
            <h2>Target Audience </h2>
            <p>Let's help you connect with your target audience and make your events</p>
          </div>
          <div className={styles.feature_chat}>
            <ChShadow alt='shadow' className={styles.chShadow} />
            <ChatIcon alt='icon' />
            <h2>Chat With Clients</h2>
            <p>Embrace the ease and efficiency of event today with ezy event</p>
          </div>
        </div>
        <div className={styles.feature_work}>
          <WoShadow alt='shadow' className={styles.woShadow} />
          <WorkIcon alt='work Icon' />
          <h2>Chat With Clients</h2>
          <p>Embrace the ease and efficiency of event today with ezy event</p>
        </div>
      </div>
    </section>
  );
};

export default Exclusive;
