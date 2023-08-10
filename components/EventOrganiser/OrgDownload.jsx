import React from 'react';
import styles from '../../styles/EventOrganiser.module.css';
import Image from 'next/image';
import bgImage from '../../public/assets/img/home/downloadbg.png';
import phoneDownload from '../../public/assets/img/EventOrg/createEvent.png';
import apple from '../../public/assets/img/common/Home-Apple-download.png';
import google from '../../public/assets/img/common/Home-Play-store-Download.png';

const OrgDownload = () => {
  return (
    <section className={styles.org_download_section}>
      <div className={styles.orgdownload_data_container}>
        <div className={styles.orgdownload_text_container}>
          <h2 className={styles.orgdownloadH2}>
            Create Your <span> Event </span>in Easy way
          </h2>

          <div className={styles.dimage_container}>
            <Image className={styles.phoneDownload} src={phoneDownload} alt='About Ezy Event' />
            <div className={styles.dIcon_container}>
              <Image src={apple} className={styles.apple_img} alt='Apple App Store Link' />
              <Image src={google} alt='Play Store Link' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrgDownload;
