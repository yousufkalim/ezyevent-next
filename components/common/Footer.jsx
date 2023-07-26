import React from 'react';
import styles from '../../styles/Common.module.css';
import { ReactComonent as FacebookImg } from '../../public/assets/img/common/facebook.svg';
import { ReactComponent as Instaimg } from '../../public/assets/img/common/instagram.svg';
import { ReactComonent as LinkedinImg } from '../../public/assets/img/common/linkedin.svg';
import { ReactComonent as YoutubeImg } from '../../public/assets/img/common/youtube.svg';

const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.footer_data}>
        <div className={styles.sitePages}>
          <h3 className={styles.page_Title}>WEBSITE PAGES</h3>
          <h2 className={styles.pageH2}>Homepage</h2>
          <h2 className={styles.pageH2}>Event Organiser</h2>
          <h2 className={styles.pageH2}>Service Provider</h2>
          <h2 className={styles.pageH2}>About us</h2>
          <h2 className={styles.pageH2}>Contact us</h2>
        </div>
        <div className='HEADQAUTER'>
          <h3 className={styles.headquater_footer}>HEADQAUTER</h3>
          <h2 className={styles.HeadH2}>
            Street 8A, near <br /> Shaukat Khanum <br /> Hospital Road, <br /> Iqbal Avenue <br />{' '}
            Housing Society <br /> Lahore, Punjab <br /> 54000
          </h2>
        </div>
        <div className={styles.social_links}>
          <h3 className={styles.social_linksH3}> Soical Links</h3>
          <div className={styles.facebook_link}>
            <a className={styles.facebook_img} href='#'>
              <FacebookImg alt='Logo' />
              Facebook
            </a>
          </div>
          <div className={styles.instagram_link}>
            <a className={styles.insta_img} href='#'>
              <Instaimg />
              <span style={{ marginRight: '-4%' }}>Instagram</span>
            </a>
          </div>
          <div className={styles.linkedin_link}>
            <a className={styles.linkedin_img} href='#'>
              <LinkedinImg alt='Logo' />
              Linkedin
            </a>
          </div>
          <div className={styles.youtube_link}>
            <a className={styles.youtube_img} href='#'>
              <YoutubeImg alt='Logo' />
              Youtube
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
