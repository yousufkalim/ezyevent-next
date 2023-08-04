import React from 'react';
import Image from 'next/image';
import styles from '../../styles/Service.module.css';
import apple from '../../public/assets/img/common/Home-Apple-download.png';
import google from '../../public/assets/img/common/Home-Play-store-Download.png';
import phoneimg from '../../public/assets/img/servicesP/phone.png';

const SpDownload = () => {
  return (
    <section className={styles.spDownload_section}>
      <div className={styles.dwonload_data_container}>
        <div className={styles.dwonload_text_container}>
          <h3>Download Now !</h3>
          <h2>
            {' '}
            Unlock the Magic <br /> of Ezyevent
          </h2>
          <p>
            Welcome to the world of Ezyevent, where we transform <br /> your event dreams into
            extraordinary realities. With our <br /> innovative platform, planning and organizing
            events <br />
            become a seamless and enjoyable experience
          </p>
          <div className={styles.dIcon_container}>
            <Image src={apple} alt='Apple App Store Link' />
            <Image src={google} alt='Play Store Link' />
          </div>
        </div>
        <div className={styles.phone_container}>
          <div className={styles.down_shadow}>
            <div className={styles.down_shape}></div>
          </div>
          <Image src={phoneimg} className={styles.phoneImg} alt='Apple App Store Link' />
        </div>
      </div>
    </section>
  );
};

export default SpDownload;
