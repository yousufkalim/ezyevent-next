import React from 'react';
import styles from '../../styles/Home.module.css';
import Image from 'next/image';
import phoneDownload from '../../public/assets/img/home/phoneDownload.png';
import apple from '../../public/assets/img/common/Home-Apple-download.png';
import google from '../../public/assets/img/common/Home-Play-store-Download.png';

const DownloadApp = () => {
  return (
    <section className={`${styles.downloadapp_container} ${styles.section}`} id='section_download'>
      <div className={styles.download_data_container}>
        <div className={styles.download_text_container}>
          <h3 className={styles.downloadH3}>Download Now !</h3>
          <h2 className={styles.downloadH2}>Embark on Your Ezyevent Journey</h2>
          <p className={styles.downloadp}>
            Welcome to the world of Ezyevent, where we transform <br /> your event dreams into
            extraordinary realities. With <br /> innovative platform, planning and organizing events{' '}
            <br />
            become a seamless and enjoyable experience
          </p>

          <div className={styles.dIcon_container}>
            <Image src={apple} alt='Apple App Store Link' />
            <Image src={google} alt='Play Store Link' />
          </div>
        </div>
        <Image className={styles.phoneDownload} src={phoneDownload} alt='About Ezy Event' />
      </div>
    </section>
  );
};

export default DownloadApp;
